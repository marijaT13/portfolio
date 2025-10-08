"use client";
import { useEffect } from "react";
import '/app/widgets.css';

export default function KeycodesWidget() {
  useEffect(() => {
    // ✅ Keycode event logic
    const code = document.querySelector(".code-key") as HTMLElement | null;
    const key = document.querySelector(".key-key") as HTMLElement | null;
    const title = document.querySelector(".title-key") as HTMLElement | null;

    if (!code || !key || !title) return;

    window.addEventListener("keydown", function (e) {
      key.style.display = "block";
      code.innerHTML = "";
      key.innerHTML = "";

      if (
        e.key === "Tab" ||
        e.key === " " ||
        e.key === "Enter" ||
        e.key === "Shift" ||
        e.key === "Meta" ||
        e.key === "Backspace" ||
        e.key === "Control" ||
        e.key === "CapsLock" ||
        e.key === "Delete" ||
        e.key === "Escape"
      ) {
        key.classList.add("adjust-text");
      } else {
        key.classList.remove("adjust-text");
      }

      const keyCode = document.createTextNode(e.keyCode.toString());
      let keyPressed = document.createTextNode(e.key);

      if (e.keyCode === 32) {
        keyPressed = document.createTextNode("Space");
      } else if (e.keyCode === 91) {
        keyPressed = document.createTextNode("Command");
      }

      code.appendChild(keyCode);
      key.appendChild(keyPressed);
      title.style.display = "none";
    });

    // ✅ Cleanup
    return () => {
      window.removeEventListener("keydown", () => {});
    };
  }, []);

  useEffect(() => {
    // ✅ Typewriter effect
    const lines = ["Press Any Key", "On Keyboard"];
    const el = document.querySelector(".typewriter-key");
    if (!el) return;

    el.innerHTML = "<span></span><br/><span></span>";
    const spans = el.querySelectorAll("span");

    let lineIndex = 0;
    let charIndex = 0;

    function typeLine() {
      spans.forEach((span) => span.classList.remove("cursor"));
      if (lineIndex < lines.length) {
        spans[lineIndex].classList.add("cursor");

        if (charIndex < lines[lineIndex].length) {
          spans[lineIndex].textContent += lines[lineIndex].charAt(charIndex);
          charIndex++;
          setTimeout(typeLine, 100);
        } else {
          charIndex = 0;
          lineIndex++;
          setTimeout(typeLine, 300);
        }
      }
    }

    typeLine();
  }, []);

  return (
    <section>
      <div className="container-keycode">
        <div className="title-key">
          <h2 className="typewriter-key"></h2>
          <h3>
            <span>To get key code</span>
          </h3>
        </div>

        <div className="code-container-key">
          <h3 className="code-key"></h3>
          <div className="key-key"></div>
        </div>
      </div>
    </section>
  );
}
