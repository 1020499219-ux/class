# Wine Class 页面

- Workspace: `/Users/huicheng/Documents/Codex Project/Class页面`
- Static HTML/CSS/JS. Run `npm run dev` from this directory.
- Preview port: 5189. Expected document title: `Class · Wine 温酒设计`.
- Before starting, check port ownership; never stop another project's server. The Python HTTP server binds exactly to 127.0.0.1:5189 and fails if occupied. Select another free port if needed and update these instructions.
- Verify HTTP title and representative assets before opening a preview. Keep the task's verified server running.
- The visual target is the user's three JPGs under `/Users/huicheng/Desktop/wine网站元素/class页面交互/`. Video motion reference: `录屏2026-10-21.mov` in the parent directory.
- A = feedback, work orbit, benefits intro. B = one continuous gray course block ending with the interview coaching. C begins with capability heading AND its top artwork, followed by audience, price, inclusions, footer.
- B expands only once. Never pin A, split the course into mandatory viewport-height slides, or rasterize live text.
- C stays fixed only during the B-bottom reveal; all C content must remain scrollable afterward. Reverse scrolling must reconstruct both transitions.
- Motion hooks: `data-region`, `data-module`, `data-art`, `data-reveal`, `data-motion`. Outer region motion and inner text/art motion belong on different elements.
- GSAP/ScrollTrigger are vendored from the declared npm dependency; refresh vendor files if updating GSAP.
- Works use the user's independent source assets. Feedback screenshots are individual crops from the supplied design, pending higher-resolution originals. No full module/page screenshots are used as page backgrounds.
