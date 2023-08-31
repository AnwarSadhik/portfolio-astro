export let dark:boolean = false;

export function toggleDarkMode() {
  dark = !dark;
  document.documentElement.classList.toggle("dark", dark);

  // console.log("Dark mode toggled: ", dark);
}