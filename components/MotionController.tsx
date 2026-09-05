"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const PROTOTYPE_ROUTES = new Set([
  "/",
  "/workplace-wellbeing-programs",
  "/blog/what-is-work-wellness",
]);

const motionNameForRoute = (pathname: string) => {
  if (pathname === "/") return "homepage";
  if (pathname === "/workplace-wellbeing-programs") return "programs";
  if (pathname === "/blog/what-is-work-wellness") return "editorial";
  return "prototype";
};

export function MotionController() {
  const pathname = usePathname();

  useEffect(() => {
    if (!PROTOTYPE_ROUTES.has(pathname)) return;

    const root = document.getElementById("main-content");
    if (!root) return;

    const marked = new Set<HTMLElement>();
    const mark = (element: Element | null, attribute: string, value: string) => {
      if (!(element instanceof HTMLElement)) return;
      element.setAttribute(attribute, value);
      marked.add(element);
    };

    root.dataset.motionPrototype = motionNameForRoute(pathname);

    const pageSections = pathname === "/blog/what-is-work-wellness"
      ? Array.from(root.querySelectorAll("article > section"))
      : Array.from(root.querySelectorAll(":scope > section"));

    pageSections.forEach((section, index) => {
      if (index === 0) {
        mark(section, "data-motion", "hero");
      } else {
        mark(section, "data-motion", "reveal");
      }
    });

    const hero = pageSections[0] as HTMLElement | undefined;
    if (hero) {
      const copy = pathname === "/blog/what-is-work-wellness"
        ? hero.querySelector(".max-w-4xl")
        : hero.querySelector(".grid > div:first-child");

      if (copy instanceof HTMLElement) {
        Array.from(copy.children).forEach((child, index) => {
          mark(child, "data-motion-child", String(index));
          if (child instanceof HTMLElement) {
            child.style.setProperty("--motion-child-index", String(index));
          }
        });
      }

      const heroFigure = hero.querySelector("figure");
      if (heroFigure instanceof HTMLElement) {
        mark(heroFigure, "data-motion-child", "image");
        heroFigure.style.setProperty("--motion-child-index", "3");
        mark(heroFigure, "data-motion-image", "drift");
      }

      const guide = hero.querySelector("div.border.bg-white");
      if (guide instanceof HTMLElement) {
        mark(guide, "data-motion", "guide");
        Array.from(guide.children).forEach((child, index) => {
          if (child instanceof HTMLElement) {
            mark(child, "data-motion-child", String(index));
            child.style.setProperty("--motion-child-index", String(index));
          }
        });
      }
    }

    root.querySelectorAll("figure").forEach((figure) => {
      if (!figure.hasAttribute("data-motion-image")) {
        mark(figure, "data-motion-image", "drift");
      }
    });

    root.querySelectorAll("a.group").forEach((link) => {
      mark(link, "data-motion-response", "row");
    });

    if (pathname === "/workplace-wellbeing-programs") {
      root.querySelectorAll("#program-shape article").forEach((card) => {
        mark(card, "data-motion-response", "card");
      });
    }

    if (pathname === "/blog/what-is-work-wellness") {
      root.querySelectorAll("article > section article").forEach((card) => {
        mark(card, "data-motion-response", "card");
      });

      const guardrail = root.querySelector(".border-l-4.border-\[var\(--cya-ochre\)\]");
      if (guardrail) mark(guardrail, "data-motion", "emphasis");

      root.querySelectorAll("article aside").forEach((aside) => {
        mark(aside, "data-motion", "emphasis");
      });
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const motionNodes = Array.from(root.querySelectorAll<HTMLElement>("[data-motion]"));
    const imageFrames = Array.from(root.querySelectorAll<HTMLElement>("[data-motion-image='drift']"));

    if (reduceMotion.matches) {
      motionNodes.forEach((node) => node.setAttribute("data-motion-state", "visible"));
      return () => {
        root.removeAttribute("data-motion-prototype");
        marked.forEach((node) => {
          node.removeAttribute("data-motion");
          node.removeAttribute("data-motion-state");
          node.removeAttribute("data-motion-child");
          node.removeAttribute("data-motion-image");
          node.removeAttribute("data-motion-response");
          node.style.removeProperty("--motion-child-index");
          node.style.removeProperty("--motion-image-shift");
        });
      };
    }

    document.documentElement.classList.add("motion-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).setAttribute("data-motion-state", "visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    motionNodes.forEach((node) => observer.observe(node));

    let frame = 0;
    const updateImageDrift = () => {
      frame = 0;
      const viewportHeight = window.innerHeight || 1;

      imageFrames.forEach((figure) => {
        const rect = figure.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > viewportHeight) return;

        const centre = rect.top + rect.height / 2;
        const normalised = (centre - viewportHeight / 2) / viewportHeight;
        const shift = Math.max(-28, Math.min(28, normalised * -32));
        figure.style.setProperty("--motion-image-shift", `${shift.toFixed(1)}px`);
      });
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateImageDrift);
    };

    updateImageDrift();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      document.documentElement.classList.remove("motion-ready");
      root.removeAttribute("data-motion-prototype");
      marked.forEach((node) => {
        node.removeAttribute("data-motion");
        node.removeAttribute("data-motion-state");
        node.removeAttribute("data-motion-child");
        node.removeAttribute("data-motion-image");
        node.removeAttribute("data-motion-response");
        node.style.removeProperty("--motion-child-index");
        node.style.removeProperty("--motion-image-shift");
      });
    };
  }, [pathname]);

  return null;
}
