document.addEventListener('DOMContentLoaded', () => {

    const packingContainer = document.querySelector('.product__packing-list');
    const skuValue = document.getElementById('product-sku');
    const priceCurrent = document.getElementById('product-price');
    const priceOld = document.getElementById('product-old-price');

    if (!packingContainer) return;


    packingContainer.addEventListener('click', (event) => {
        const clickedBtn = event.target.closest('.product__packing-btn');

        if (!clickedBtn || clickedBtn.classList.contains('product__packing-btn--active')) {
            return;
        }

        const buttons = packingContainer.querySelectorAll('.product__packing-btn');
        buttons.forEach(btn => btn.classList.remove('product__packing-btn--active'));
        clickedBtn.classList.add('product__packing-btn--active');

        const newSku = clickedBtn.getAttribute('data-sku');
        const newPrice = clickedBtn.getAttribute('data-price');
        const newOldPrice = clickedBtn.getAttribute('data-old-price');

        if (skuValue) skuValue.textContent = newSku;
        if (priceCurrent) priceCurrent.textContent = newPrice;

        if (priceOld) {
            if (newOldPrice) {
                priceOld.textContent = newOldPrice;
                priceOld.style.display = '';
            } else {
                priceOld.style.display = 'none';
            }
        }
    });
});
