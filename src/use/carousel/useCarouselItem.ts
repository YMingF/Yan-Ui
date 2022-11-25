import { Ref, getCurrentInstance, inject, ref, watch } from 'vue';

export function useCarouselItem() {
    const carouselRoot = inject('carouselBox') as { rootRef: Ref, isVertical: boolean, activeKey: Ref };
    const {rootRef, isVertical, activeKey} = carouselRoot;
    const carouselItemRef = ref<HTMLDivElement>();
    const currentIndex = getCurrentInstance()?.['vnode']['key'];
    const translate = ref(0);
    watch(() => activeKey.value, () => {
        translate.value = calTranslate(currentIndex, activeKey.value);
    });

    function calTranslate(index, activeIndex) {
        const rootEl = rootRef.value;
        if (!rootEl) {
            return 0;
        }
        const distance = (isVertical ? rootEl.offsetHeight : rootEl.offsetWidth) || 0;
        return distance * (index - activeIndex);
    }

    return {carouselItemRef, translate};
}

