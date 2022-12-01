export function clickOutside(el, binding) {
    window.onclick = (e) => {
        console.log(e.target !== el);
        console.log(binding);
        if (e.currentTarget !== el) {
            binding.value.call?.();
        }
    };
}