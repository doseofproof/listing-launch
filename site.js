const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
}

const form = document.querySelector("#book-form");
if (form) {
  const params = new URLSearchParams(location.search);
  const pkg = params.get("package");
  if (pkg && form.package) form.package.value = pkg;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = data.get("name") || "";
    const email = data.get("email") || "";
    const brokerage = data.get("brokerage") || "";
    const market = data.get("market") || "";
    const packageName = data.get("package") || "";
    const address = data.get("address") || "";
    const timing = data.get("timing") || "";
    const message = data.get("message") || "";
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Brokerage: ${brokerage}`,
      `Market: ${market}`,
      `Package: ${packageName}`,
      `Listing address: ${address}`,
      `Timing: ${timing}`,
      "",
      message
    ].join("\n");
    const href = `mailto:maddie@ugcbymaddie.com?subject=${encodeURIComponent("Listing Launch inquiry — " + name)}&body=${encodeURIComponent(body)}`;
    const thanks = document.querySelector("#thanks");
    if (thanks) thanks.hidden = false;
    window.location.href = href;
  });
}
