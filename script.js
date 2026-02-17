/* Add custom Js styles below */ 

/* =================================
   Footer
================================= */

document.addEventListener("DOMContentLoaded", function() {
    
function buildMlehaFooter() {
    // جلب الوصف (موجود عندكِ سابقاً)
    const descElement = document.querySelector('.footer-description') || document.querySelector('.store-footer__inner p strong');
    let storeDescHtml = descElement ? descElement.innerHTML : "";

    // جلب اللغة والعملة 
    const originalSettings = document.querySelector('.store-footer__settings');
    const settingsHtml = originalSettings ? originalSettings.innerHTML : "";
        // إذا كان النص فارغاً، نضع النص الافتراضي لمليحة
if (!storeDescHtml || storeDescHtml.trim() === "") {
            storeDescHtml = `
                قل للمليحة: في كل فستانٍ قصة… وفي كل تصميمٍ نخلق الجمال لأجلك<br>
                مليحة® علامة تجارية مسجلة<br>
                براند سعودي نفتخر به
            `;
        }

        const logoImg = document.querySelector('.store-footer__inner img.img-fluid');
        const logoSrc = logoImg ? logoImg.src : "https://cdn.salla.sa/AzEboQ/fvTE4nMRp8E2TspQVyR6HYuaRnDIsiEelEnlruyT.png";

        // 2. تحديث نصوص النشرة البريدية
        const newsH2 = document.querySelector('.store-footer__newsletter h2');
        if (newsH2) newsH2.innerText = "اشتركي لتصلكِ تحديثات مليحة";

        const newsContainer = document.querySelector('.store-footer__newsletter .container');
        if (newsContainer && !document.querySelector('.mleha-sub-text')) {
            const subText = document.createElement('p');
            subText.className = 'mleha-sub-text';
            subText.innerText = "كوني أول من يطّلع على الإصدارات الجديدة، العروض الحصرية، وأحدث أخبار مليحة.";
            if (newsH2) newsH2.after(subText);
        }

        // 3. بناء الفوتر الجديد
        const footerInner = document.querySelector('.store-footer__inner');
        if (footerInner && !document.querySelector('.mleha-custom-wrapper')) {
            const wrapper = document.createElement('div');
            wrapper.className = 'mleha-custom-wrapper';
            wrapper.innerHTML = `
                <div class="mleha-row-1">
                    <img src="${logoSrc}" alt="Logo">
                    <div class="store-desc">${storeDescHtml}</div>
                </div>
                <div class="mleha-row-2">
                    <div class="link-group acc-item">
                        <h3>روابط مهمة</h3>
                        <ul class="footer-list">
                            <li><a href="/ar/redirect/pages/1302158389">سياسة الاستبدال والاسترجاع</a></li>
                            <li><a href="/ar/redirect/pages/228417194">سياسة الأمان والخصوصية</a></li>
                            <li><a href="/ar/redirect/pages/2066594741">سياسة الاستخدام</a></li>
                            <li><a href="/ar/redirect/pages/692100276">معلومات الشحن</a></li>
                        </ul>
                    </div>
                    <div class="link-group acc-item">
                        <h3>روابط سريعة</h3>
                        <ul class="footer-list">
                            <li><a href="/ar/redirect/pages/867188649">من نحن</a></li>
                            <li><a href="https://app.mleha.com/returns" target="_self">تقديم طلب استبدال واسترجاع</a></li>
                            <li><a href="/ar/redirect/pages/1426774710">التسويق بالعمولة</a></li>
                            <li><a href="/ar/redirect/pages/1641801002">طلبات الجملة</a></li>
                            <li><a href="/ar/redirect/pages/1537524623">اتصل بنا</a></li>
                        </ul>
                    </div>
                    <div class="link-group social-group">
                        <h3>تابعينا</h3>
                        <div class="social-icons">
                            <a href="https://www.instagram.com/mleha_ksa" target="_blank"><i class="sicon-instagram"></i></a>
                            <a href="https://www.snapchat.com/add/mleha.sa" target="_blank"><i class="sicon-snapchat"></i></a>
                            <a href="https://www.tiktok.com/@mleha_ksa" target="_blank"><i class="sicon-tiktok"></i></a>
                        </div>
                    </div>
                </div>
<div class="mleha-row-3">
    <a href="https://cdn.salla.sa/AzEboQ/el01gdmTle3bLnCQqh7CdF7Xps6AHKvyOWLFKe7z.jpg" target="_blank" class="mleha-cert-item">
        <img src="https://cdn.salla.network/images/tax.png" alt="الضريبة">
        <span>الرقم الضريبي</span>
    </a>

    <a href="https://eauthenticate.saudibusiness.gov.sa/certificate-details/0000173932" target="_blank" class="mleha-cert-item">
        <img src="https://cdn.salla.network/images/sbc.png" alt="موثق">
        <span>المركز السعودي للأعمال</span>
    </a>

    <a href="https://fileintegration.saip.gov.sa/previewFile/1ab58835-e51c-444d-b799-e1a4c0632622/IPRs4TM/" target="_blank" class="mleha-cert-item">
        <img src="https://epatentsso.saip.gov.sa/images/SaipLogoMini.png" alt="الملكية الفكرية">
        <span>الهيئة السعودية للملكية الفكرية</span>
    </a>
</div>
<div class="mleha-row-settings">
    <div class="mleha-settings-container">
        <button type="button" onclick="salla.event.dispatch('localization::open')" class="mleha-setting-btn">
            <i class="sicon-earth"></i>
            <span>العربية</span>
            <span class="sicon-keyboard_arrow_down"></span>
        </button>

        <span class="divider">|</span>

        <button type="button" onclick="salla.event.dispatch('localization::open')" class="mleha-setting-btn">
            <i class="sicon-dollar-coin-stack"></i>
            <span>ريال سعودي</span>
            <span class="sicon-keyboard_arrow_down"></span>
        </button>
        
        <salla-localization-modal language="ar" currency="SAR"></salla-localization-modal>
    </div>
</div>
            `;
            
            // بدلاً من مسح كل شيء، نخفي العناصر القديمة فقط ونضيف الجديد
            const oldContainer = footerInner.querySelector('.container');
            if (oldContainer) oldContainer.style.display = 'none';
            footerInner.appendChild(wrapper);

            // تفعيل الأكورديون
            wrapper.querySelectorAll('.acc-item h3').forEach(header => {
                header.addEventListener('click', () => {
                    if (window.innerWidth <= 768) header.parentElement.classList.toggle('active');
                });
            });
        }
    }

    // تشغيل الوظيفة
    setTimeout(buildMlehaFooter, 500); // تأخير بسيط لضمان تحميل بيانات سلة
});

/* =================================
   Footer
================================= */

const header = document.querySelector('.main-nav-container');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.setProperty('background-color', '#EFE3D6', 'important');
    } else {
        header.style.setProperty('background-color', 'transparent', 'important');
    }
});



document.querySelectorAll('.s-block--custom-reviews h4').forEach(el => {
  if (el.textContent.includes(' - ')) {
    const [name, city] = el.textContent.split(' - ');
    el.innerHTML = `
      <span class="review-name">${name}</span>
      <span class="review-city">${city}</span>
    `;
  }
});


// Wait until the widget is loaded
document.addEventListener("DOMContentLoaded", () => {
  const widget = document.querySelector("salla-mini-checkout-widget");

  if (widget && widget.shadowRoot) {
    const button = widget.shadowRoot.querySelector("button");
    if (button) {
      button.style.border = "none";
      button.style.borderRadius = "8px";
      button.style.fontSize = "14px";
    }
  }
});
function styleSallaButtons() {
  document.querySelectorAll('.s-fast-checkout-button').forEach(btn => {
    btn.style.border = 'none';
    btn.style.borderRadius = '8px';
    btn.style.fontSize = '14px';
  });
}



(function () {
  // Only on this product page
  var mustMatchPath = "/ar/oZEXQmz";
  if (location.pathname !== mustMatchPath) return;

  // Add red style to .product-entry__sub-title
  var style = document.createElement("style");
  style.textContent = `
    .product-entry__sub-title {
      margin: 20px 0 0 0 !important;
      color: red !important;
    }
    .preorder-locked,
    .preorder-locked * { pointer-events: none !important; }
    .preorder-locked button,
    .preorder-locked [role="button"] { opacity: .5 !important; }
  `;
  document.head.appendChild(style);

  // Inject consent input after target <h2>
  var h2 = document.querySelector('h2.product-entry__sub-title');
  if (!h2) return;

  var consentBoxId = "preorder-consent-input";
  if (!document.getElementById(consentBoxId)) {
    var consentWrapper = document.createElement("div");
    consentWrapper.dir = "rtl";
    consentWrapper.style.margin = "10px 0 16px";
    consentWrapper.innerHTML = `
      <label for="${consentBoxId}" style="display:block; font-size:14px; color:var(--color-text-secondary,#555); margin-bottom:6px;">
        لتأكيد الطلب المسبق، اكتب <strong>اوافق</strong> في الحقل التالي:
      </label>
      <input id="${consentBoxId}" type="text" inputmode="text"
        placeholder="اكتب اوافق لإكمال الطلب"
        style="width:100%;max-width:420px;padding:10px 12px;border:1px solid #ccc;border-radius:8px;font-size:15px;outline:none;"
        aria-label="حقل موافقة الطلب المسبق"
      />
    `;
    h2.insertAdjacentElement("afterend", consentWrapper);
  }

  var input = document.getElementById(consentBoxId);
  var containerSelector = ".s-add-product-button-main";
  var consentOK = false;

  function getContainer() { return document.querySelector(containerSelector); }

  function hardLock() {
    var container = getContainer();
    if (!container) return;
    container.classList.add("preorder-locked");
    container.querySelectorAll("button,[role='button']").forEach(b => {
      b.setAttribute("disabled","disabled");
      b.setAttribute("aria-disabled","true");
    });
  }

  function unlock() {
    consentOK = true;
    var container = getContainer();
    if (!container) return;
    container.classList.remove("preorder-locked");
    container.querySelectorAll("button,[role='button']").forEach(b => {
      b.removeAttribute("disabled");
      b.setAttribute("aria-disabled","false");
      b.style.pointerEvents = "";
      b.style.opacity = "";
    });
  }

  hardLock();

  var mo = new MutationObserver(() => { if (!consentOK) hardLock(); });
  mo.observe(document.documentElement, { childList:true, subtree:true });

  var watchdog = setInterval(() => { if (!consentOK) hardLock(); }, 300);

  function checkConsent() {
    var val = (input.value || "").trim();
    if (val === "اوافق") {
      unlock();
      clearInterval(watchdog);
      mo.disconnect();
    } else {
      consentOK = false;
      hardLock();
    }
  }
  ["input","change","paste"].forEach(evt => input.addEventListener(evt, checkConsent, {passive:true}));
})();

(function() {
    var meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = "theme-color";
      document.head.appendChild(meta);
    }
   meta.setAttribute("content", "#9d3d38");
    // meta.setAttribute("content", "#eee2d4");
    
  })();

document.addEventListener("DOMContentLoaded", () => {
  const label = document.querySelector('.flex.justify-between.text-lg.mb-5 span.text-store-text-secondary');
  if (label && label.textContent.trim() === "الإجمالي") {
    label.textContent = "الإجمالي (شامل الضريبة)";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.text-store-text-secondary').forEach(el => {
    if (el.textContent.includes("الأسعار شاملة للضريبة")) {
      el.remove();
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("*").forEach(function (el) {
    if (el.textContent.trim() === "السعر شامل الضريبه") {
      el.style.display = "none";
    }
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const DISMISS_KEY = "bcio_modal_dismissed_until"; // timestamp (ms) until which we won't show
  const AUTO_SHOW_DELAY_MS = 3000;                   // 3s after first scroll

  const isDismissed = () => {
    try {
      const v = localStorage.getItem(DISMISS_KEY);
      return v && Date.now() < Number(v);
    } catch { return false; }
  };

  const dismissForToday = () => {
    try {
      const now = new Date();
      const endOfDay = new Date(now);
      endOfDay.setHours(23, 59, 59, 999); // local end-of-day
      localStorage.setItem(DISMISS_KEY, String(endOfDay.getTime()));
    } catch {}
  };

  if (isDismissed()) return;

  // ===== Container
  const container = document.createElement("div");
  container.id = "bcio-popups";
  container.style.cssText = "z-index:1000000;position:fixed;inset-block-start:0;inset-inline-start:0;";
  document.body.appendChild(container);

  // ===== Overlay (CENTERED MODAL)
  const overlay = document.createElement("div");
  overlay.setAttribute("data-testid", "bcio__popupRoot");
  overlay.style.cssText = `
    position: fixed; inset: 0; width: 100vw; height: 100vh;
    background-color: rgba(0,0,0,0.5);
    display: none; justify-content: center; align-items: center;
    direction: rtl; z-index: 1000002;
  `;

  const style = document.createElement("style");
  style.innerHTML = `h1,h2,p{box-sizing:border-box;margin:0;padding:0}`;
  overlay.appendChild(style);

  const modal = document.createElement("div");
  modal.style.cssText = `
    display:flex; flex-direction:column-reverse; width:90%; height:382px; max-width:400px;
    background:#eeeeee; box-shadow:rgba(0,0,0,0.3) 0 2px 5px; position:relative;
    max-height:450px; border:none; border-radius:4px; align-items:stretch; justify-content:stretch;
  `;

  const closeBtn = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  closeBtn.setAttribute("width","18"); closeBtn.setAttribute("height","18");
  closeBtn.setAttribute("viewBox","0 0 18 18"); closeBtn.setAttribute("role","button");
  closeBtn.style.cssText = "position:absolute;inset-inline-end:1rem;top:1rem;cursor:pointer;";
  closeBtn.innerHTML = `
    <rect width="18" height="18" rx="9" fill="white" fill-opacity="0.4"></rect>
    <path d="M10.9425 6L9 7.9425L7.0575 6L6 7.0575L7.9425 9L6 10.9425L7.0575 12L9 10.0575L10.9425 12L12 10.9425L10.0575 9L12 7.0575L10.9425 6Z
             M9 1.5C4.8525 1.5 1.5 4.8525 1.5 9C1.5 13.1475 4.8525 16.5 9 16.5C13.1475 16.5 16.5 13.1475 16.5 9C16.5 4.8525 13.1475 1.5 9 1.5Z
             M9 15C5.6925 15 3 12.3075 3 9C3 5.6925 5.6925 3 9 3C12.3075 3 15 5.6925 15 9C15 12.3075 12.3075 15 9 15Z"
          fill="black" fill-opacity="0.6"></path>`;

  const textArea = document.createElement("div");
  textArea.style.cssText = `
    flex:3 1 0%; text-align:center; display:flex; flex-direction:column; justify-content:center;
    align-items:center; padding:0 2em 2em 2em; gap:1em;
  `;
  textArea.innerHTML = `
  <h2 style="color:#000;font-size:16px;font-weight:bolder;">يا هلا وغلا بالمليحة 💛</h2>
  <h2 style="color:#000;font-size:16px;font-weight:bolder;">جهزّنا لك كود شحن مجاني على طلبك الأول 🎁</h2>
  <h2 style="color:#000;font-size:16px;font-weight:bolder;">استخدميه قبل ما ينتهي 👇</h2>
  <a href="https://wa.me/966531349631?text=مرحبا! أود الحصول على كود الشحن المجاني!" 
     target="_blank"
     style="background-color:#9d3d38;padding:1em 2em;border-radius:4px;min-width:70%;border:none;font-weight:bold;color:#fff;cursor:pointer;display:inline-block;text-decoration:none;">
    احصل على كود الشحن المجاني
  </a>
  <p style="color:#7a7986;font-size:0.7em;font-family:sans-serif;">
    * بتعبئة هذا النموذج، ستقوم بالتسجيل لتلقي رسائلنا على الواتساب ويمكنك إلغاء الاشتراك في أي وقت.
  </p>
`;

  const imageArea = document.createElement("div");
  imageArea.style.cssText = `flex:2 1 0%; height:175px; display:block; overflow:hidden;`;
  const img = document.createElement("img");
  img.src = "https://raw.githubusercontent.com/EmadAlareefi/mleha-font/refs/heads/main/images/discount-bg.jpg";
  img.alt = "popup image"; img.loading = "lazy";
  img.style.cssText = "width:100%;height:81%;object-fit:contain;background:#efe1d4;";
  imageArea.appendChild(img);

  // assemble modal
  modal.appendChild(closeBtn);
  modal.appendChild(textArea);
  modal.appendChild(imageArea);
  overlay.appendChild(modal);
  container.appendChild(overlay);

  // Open / Close helpers
  const openModal = () => {
    if (isDismissed()) return;
    overlay.style.display = "flex";
  };
  const closeModal = () => {
    overlay.style.display = "none";
    dismissForToday(); // don't show again today
  };

  closeBtn.addEventListener("click", closeModal);

  // Clicking outside modal closes too
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });

  // ESC closes modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.style.display === "flex") {
      closeModal();
    }
  });

  // ===== Trigger: 3s AFTER FIRST SCROLL
  const scheduleOpen = () => {
    if (isDismissed()) return;
    setTimeout(openModal, AUTO_SHOW_DELAY_MS);
  };

  // If already scrolled when loaded, schedule immediately; otherwise wait for first scroll
  if (window.scrollY > 0) {
    scheduleOpen();
  } else {
    window.addEventListener("scroll", () => scheduleOpen(), { once: true, passive: true });
  }
});
  
document.addEventListener("DOMContentLoaded", () => {
const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/mleha.sa/",
      svg: `<svg fill="#000000" width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z"/><path d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z"/></svg>`
    },
    {
      name: "Snapchat",
      url: "https://www.snapchat.com/add/mleha.sa",
      svg: `<svg fill="#ffffff" width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
<title>snapchat</title>
<path d="M16.257 1.995c0.029-0 0.064-0.001 0.099-0.001 3.249 0 6.044 1.94 7.291 4.725l0.020 0.051c0.333 1.18 0.524 2.534 0.524 3.934 0 0.749-0.055 1.485-0.161 2.205l0.010-0.082-0.004 0.075c-0.015 0.225-0.027 0.431-0.037 0.637 0.132 0.072 0.289 0.114 0.456 0.114 0.016 0 0.032-0 0.048-0.001l-0.002 0c0.478-0.045 0.916-0.179 1.31-0.385l-0.019 0.009c0.162-0.082 0.352-0.13 0.554-0.13 0.009 0 0.018 0 0.027 0l-0.001-0c0.008-0 0.017-0 0.026-0 0.219 0 0.429 0.041 0.622 0.117l-0.012-0.004c0.496 0.117 0.868 0.532 0.917 1.042l0 0.005q0.028 0.842-1.516 1.46c-0.111 0.036-0.261 0.094-0.43 0.149-0.562 0.169-1.423 0.45-1.666 1.012-0.036 0.114-0.056 0.244-0.056 0.38 0 0.262 0.077 0.506 0.209 0.71l-0.003-0.005 0.019 0.019c1.117 2.493 3.286 4.344 5.926 5.003l0.061 0.013c0.299 0.049 0.525 0.306 0.525 0.616 0 0.007-0 0.014-0 0.021l0-0.001c-0.001 0.102-0.021 0.198-0.058 0.286l0.002-0.005c-0.3 0.711-1.591 1.235-3.931 1.588-0.087 0.204-0.158 0.444-0.202 0.692l-0.003 0.020c-0.046 0.268-0.104 0.501-0.177 0.727l0.010-0.036c-0.069 0.293-0.329 0.508-0.638 0.508-0.019 0-0.039-0.001-0.058-0.003l0.002 0h-0.037c-0.246-0.013-0.476-0.046-0.699-0.098l0.027 0.005c-0.477-0.107-1.024-0.169-1.586-0.169-0.002 0-0.003 0-0.005 0h0c-0.024-0-0.053-0.001-0.082-0.001-0.374 0-0.74 0.034-1.096 0.099l0.037-0.006c-0.83 0.222-1.551 0.603-2.162 1.112l0.009-0.007c-1.108 0.944-2.536 1.541-4.102 1.609l-0.014 0c-0.075 0-0.149-0.019-0.225-0.019h-0.186c-1.575-0.060-3-0.659-4.106-1.617l0.008 0.007c-0.596-0.501-1.311-0.882-2.094-1.096l-0.039-0.009c-0.346-0.055-0.747-0.089-1.156-0.092l-0.004-0c-0.568 0.008-1.115 0.076-1.642 0.196l0.053-0.010c-0.199 0.049-0.43 0.082-0.667 0.092l-0.007 0c-0.016 0.001-0.034 0.002-0.052 0.002-0.325 0-0.597-0.222-0.675-0.522l-0.001-0.005c-0.076-0.24-0.112-0.486-0.169-0.709-0.047-0.269-0.119-0.508-0.216-0.734l0.008 0.022c-2.397-0.277-3.686-0.802-3.985-1.532-0.039-0.082-0.064-0.178-0.069-0.279l-0-0.002c-0-0.007-0-0.015-0-0.023 0-0.309 0.226-0.565 0.522-0.612l0.004-0c2.703-0.674 4.873-2.527 5.965-4.968l0.022-0.056 0.020-0.036c0.133-0.195 0.212-0.436 0.212-0.695 0-0.14-0.023-0.274-0.065-0.4l0.003 0.009c-0.244-0.542-1.105-0.822-1.665-1.011-0.168-0.043-0.312-0.094-0.45-0.156l0.018 0.007c-1.383-0.544-1.571-1.162-1.496-1.591 0.207-0.583 0.753-0.992 1.395-0.992 0.023 0 0.045 0.001 0.068 0.002l-0.003-0c0.001 0 0.002 0 0.004 0 0.171 0 0.334 0.034 0.483 0.096l-0.008-0.003c0.401 0.211 0.871 0.346 1.371 0.374l0.009 0c0.012 0 0.025 0.001 0.039 0.001 0.198 0 0.385-0.049 0.549-0.135l-0.006 0.003-0.057-0.711c-0.093-0.628-0.147-1.354-0.147-2.092 0-1.406 0.194-2.768 0.555-4.058l-0.025 0.106c1.237-2.815 4.001-4.746 7.216-4.746 0.044 0 0.088 0 0.131 0.001l-0.007-0 0.524-0.019h0.075z"></path>
</svg>`
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@mleha.sa",
      svg: `<svg fill="#ffffff" width="32px" height="32px" viewBox="0 0 32 32" version="1.1"
  xmlns="http://www.w3.org/2000/svg">
  <title>tiktok</title>
  <path
    d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"></path>
</svg>`
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@mlehasa",
      svg: `<svg width="32px" height="32px" viewBox="0 -3 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    
    <title>youtube [#168]</title>
    <desc>Created with Sketch.</desc>
    <defs>

</defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7442.000000)" fill="#ffffff">
            <g id="icons" transform="translate(56.000000, 160.000000)">
                <path d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289" id="youtube-[#168]">

</path>
            </g>
        </g>
    </g>
</svg>`
    }
  ];

  const wrapper = document.querySelector('.s-social-share-wrapper');
  if (!wrapper) return;

  const ul = wrapper.querySelector('.s-social-share-list') || document.createElement('ul');
  ul.className = 's-social-share-list';

  socialLinks.forEach(link => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = link.url;
    a.target = "_blank";
    a.rel = "nofollow noopener";
    a.ariaLabel = `Visit us on ${link.name}`;
    a.className = "s-social-share-icon";
    a.innerHTML = link.svg;
    li.appendChild(a);
    ul.appendChild(li);
  });

  if (!wrapper.contains(ul)) {
    wrapper.appendChild(ul);
  }
  
  
  const button = document.querySelector('button.tab-trigger[data-target="details_table"]');

  if (button) {
    const span = button.querySelector(".s-button-text");
    if (span) {
      span.textContent = "وصف المنتج";
    }
  }
  
  
  
const allSpans = document.querySelectorAll('span');
  let modelDiv = null;

  allSpans.forEach(span => {
    const text = span.textContent.trim();
    if (text.includes('رمز الموديل') || text.includes('رقم الموديل')) {
      const parent = span.closest('.center-between');
      if (parent) modelDiv = parent;
    }
  });

  const stickySection = document.querySelector('.sticky-product-bar');

  if (modelDiv && stickySection) {
    // Remove 'center-between' and apply new styles
    modelDiv.classList.remove('center-between');
    modelDiv.style.marginTop = '12px';
    modelDiv.style.gap = '10px';
    modelDiv.style.display = 'flex';
    modelDiv.style.justifyContent = 'flex-start';
    modelDiv.style.alignItems = 'center';

    // Append below sticky bar
    stickySection.appendChild(modelDiv);
  }
  
  
});





document.addEventListener("DOMContentLoaded", function () {
  const footerText = document.querySelector(".footer-bottom p");

  if (footerText) {
    footerText.innerHTML =
      '© جميع الحقوق محفوظة لعلامة “مليحة” التجارية. استخدام الصور دون إذن يُعرّضك للمساءلة القانونية';
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const productForm = document.getElementById("product-form");
  if (!productForm) return;

  // استخراج معرّف المنتج من آخر جزء في الرابط
  const urlParts = window.location.pathname.split("/").filter(Boolean);
  const productId = urlParts[urlParts.length - 1]; // p1930088709

  const STORAGE_KEY = `product_viewers_count:${productId}`;
  const EXPIRY_MS = 2 * 60 * 1000; // دقيقتين

  let storedData = localStorage.getItem(STORAGE_KEY);
  let viewersCount;

  if (storedData) {
    try {
      storedData = JSON.parse(storedData);
      const now = Date.now();
      if (now - storedData.timestamp < EXPIRY_MS) {
        viewersCount = storedData.count;
      }
    } catch (e) {
      // لو البيانات فاسدة تجاهلها
    }
  }

  if (!viewersCount) {
    viewersCount = Math.floor(Math.random() * (35 - 7 + 1)) + 7; // 7–35
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ count: viewersCount, timestamp: Date.now() })
    );
  }

  // إنشاء العنصر مع أيقونة العين
  const viewersBlock = document.createElement("div");
  viewersBlock.className = "viewers-border";
  viewersBlock.innerHTML = `
    <svg class="eye-icon" xmlns="http://www.w3.org/2000/svg" fill="none"
         viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
    </svg>
    <span>${viewersCount}</span> عملاء يشاهدون هذا المنتج الآن
  `;

  productForm.append(viewersBlock);
});

document.addEventListener("DOMContentLoaded", function () {
  const originalColumn = document.querySelector(".store-links-items");
  if (!originalColumn) return;

  // 1️⃣ Create a wrapper with two closer columns
  const wrapper = document.createElement("div");
  wrapper.style.display = "grid";
  wrapper.style.gridTemplateColumns = "auto auto"; // auto width to make them close
  wrapper.style.justifyContent = "center"; // center the columns
  wrapper.style.gap = "40px"; // reduce spacing between columns
  wrapper.style.textAlign = "center";

  // Replace the original container parent content with the wrapper
  const parent = originalColumn.parentElement;
  parent.innerHTML = ""; 
  parent.appendChild(wrapper);

  // 2️⃣ Create first column (روابط مهمة)
  const importantCol = document.createElement("div");
  const importantTitle = document.createElement("h3");
  importantTitle.textContent = "روابط مهمة";
  importantTitle.style.marginBottom = "10px";
  importantCol.appendChild(importantTitle);

  const importantList = document.createElement("ul");
  importantList.className = "footer-list store-links-items";
  importantList.style.textAlign = "center";
  importantCol.appendChild(importantList);

  // 3️⃣ Create second column (روابط سريعة)
  const quickCol = document.createElement("div");
  const quickTitle = document.createElement("h3");
  quickTitle.textContent = "روابط سريعة";
  quickTitle.style.marginBottom = "10px";
  quickCol.appendChild(quickTitle);

  const quickList = document.createElement("ul");
  quickList.className = "footer-list store-links-items";
  quickList.style.textAlign = "center";
  quickCol.appendChild(quickList);

  // 4️⃣ Move links
  const links = originalColumn.querySelectorAll("li a");

  links.forEach(link => {
    const text = link.textContent.trim();

    // Decide which column to move the link to
    if (
      text.includes("الاستبدال") ||
      text.includes("الخصوصية") ||
      text.includes("الاستخدام") ||
      text.includes("الشحن")
    ) {
      importantList.appendChild(link.parentElement);
    } else {
      quickList.appendChild(link.parentElement);
    }
  });

  // 5️⃣ Append the columns to the wrapper
  wrapper.appendChild(importantCol);
  wrapper.appendChild(quickCol);
});


document.addEventListener("DOMContentLoaded", function () {
  // Array of swipers with their links
  const swipers = [
    { id: "featured-products-style2-2", link: "/ar/فساتين-سهرة/c86491111" },
    { id: "featured-products-style2-6", link: "/ar/فساتين-نواعم/c1460461280" },
    { id: "featured-products-style2-5", link: "/ar/جلابيات/c511204076" }
  ];

  swipers.forEach(swiper => {
    const section = document.getElementById(swiper.id);

    if (section) {
      // Create wrapper
      const btnWrapper = document.createElement("div");
      btnWrapper.style.textAlign = "center";
      btnWrapper.style.marginTop = "30px";

      // Create button
      const browseBtn = document.createElement("a");
      browseBtn.textContent = "تصفح المزيد";
      browseBtn.href = swiper.link;
      browseBtn.style.display = "inline-block";
      browseBtn.style.padding = "8px 16px";
      browseBtn.style.backgroundColor = "#f1edeb"; 
      browseBtn.style.color = "rgb(119, 119, 119)";
      browseBtn.style.fontWeight = "bold";
      browseBtn.style.borderRadius = "8px";
      browseBtn.style.textDecoration = "none";
      browseBtn.style.fontSize = "18px";
      browseBtn.style.transition = "0.3s";

      // Hover effect
      browseBtn.addEventListener("mouseenter", () => {
        browseBtn.style.opacity = "0.85";
      });
      browseBtn.addEventListener("mouseleave", () => {
        browseBtn.style.opacity = "1";
      });

      // Append button under the swiper
      btnWrapper.appendChild(browseBtn);
      section.appendChild(btnWrapper);
    }
  });
});


(function () {
  const OUT_OF_STOCK_REGEX = /\s*[-–—|/•·]?\s*(?:نف(?:ذ|د)ت?\s*الكمية|غير\s*متوفر(?:ة)?|Out\s*of\s*stock)\s*/giu;

  function stripOutOfStockText() {
    document
      .querySelectorAll('.s-product-options-disabled .s-product-options-grid-mode-span:not([data-stripped])')
      .forEach(el => {
        const original = el.textContent || "";
        const cleaned = original.replace(OUT_OF_STOCK_REGEX, '').trim();

        if (cleaned && cleaned !== original.trim()) {
          el.textContent = cleaned;         // أبقي الحجم فقط (S, M, L…)
        }
        el.dataset.stripped = '1';           // حتى لا نكرّر المعالجة
      });
  }

  // شغّل عند تحميل الصفحة
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', stripOutOfStockText);
  } else {
    stripOutOfStockText();
  }

  // راقب أي تغييرات (في حال السواتش تتحدّث آجاكس)
  const obs = new MutationObserver(stripOutOfStockText);
  obs.observe(document.documentElement, { childList: true, subtree: true });
})();


document.addEventListener("DOMContentLoaded", () => {
  // امسك عنصر "رقم الموديل"
  const modelRow = document.querySelector('.center-between.pb-5.mb-5.border-b-\\[1px\\]');
  
  // امسك عنصر .viewers-border
  const viewersBorder = document.querySelector('.viewers-border');

  if (modelRow && viewersBorder) {
    // انقل رقم الموديل بعد .viewers-border مباشرة
    viewersBorder.insertAdjacentElement("afterend", modelRow);

    // اضف مسافة فوق 10px
    modelRow.style.marginTop = "10px";
  }
});















(function () {
  // --- Config ---
  const MESSAGES = [
    "🇸🇦✨ بمناسبة اليوم الوطني نتحدى الكل ✨🇸🇦",
    "👗 اختاري ٢ فساتين بـ ٩٥ ريال شامل الضريبة",
    "🚚 شحن مجاني لجميع الطلبات فوق ٣٩٩ ريال",
    "🎁 باكج فاخر هدية مع كل شحنة مجانية",
    "💚 ومو بس كذا… لك كود خصم خاص",
  ];
  const TOTAL_MS = 3500;  // المدة الإجمالية لكل رسالة
  const FADE_MS  = 300;   // مدة التلاشي
  const HOLD_MS  = TOTAL_MS - FADE_MS; // زمن الثبات المرئي
  const FIXED = true;     // true = ثابت أعلى الصفحة مع التمرير

  function ready(fn){ document.readyState!=="loading" ? fn() : document.addEventListener("DOMContentLoaded", fn); }

  ready(function(){
    // Inject CSS
    const css = `
#promo-topbar{
  display:none;
  position:${FIXED?'fixed':'sticky'};
  top:0; left:0; right:0;
  z-index:30;
  background:#9d3d38;
  color:#fff;
  text-align:center;
  padding:.6rem .8rem;
  font-size:15px;
  line-height:1.4;
  font-weight:600;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
  ${FIXED?'width:100%;':''}
}
#promo-topbar .promo-text{
  opacity:0;
  transition:opacity ${FADE_MS}ms ease;
  display:inline-block;
}
#promo-topbar .promo-text.show{ opacity:1; }
@media (prefers-reduced-motion: reduce){
  #promo-topbar .promo-text{ transition:none; }
}
    `.trim();
    const style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);

    // Create bar
    const bar = document.createElement("div");
    bar.id = "promo-topbar";
    bar.setAttribute("role","status");
    bar.setAttribute("aria-live","polite");
    bar.setAttribute("dir","rtl");

    const span = document.createElement("span");
    span.className = "promo-text";
    bar.appendChild(span);

    // Push page content down if fixed
    if (FIXED) {
      // temporarily attach to measure height, then add padding to body
      document.body.prepend(bar);
      requestAnimationFrame(()=>{
        const h = bar.getBoundingClientRect().height;
        document.body.style.paddingTop = (parseFloat(getComputedStyle(document.body).paddingTop||"0")+h)+"px";
      });
    } else {
      document.body.prepend(bar);
    }

    // Rotation logic
    let i = 0;
    let reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function cycle(){
      span.textContent = MESSAGES[i];
      if (!reduceMotion) {
        // fade in
        span.classList.add("show");
        setTimeout(()=>{
          // fade out
          span.classList.remove("show");
          setTimeout(()=>{
            i = (i+1) % MESSAGES.length;
            cycle();
          }, FADE_MS);
        }, HOLD_MS);
      } else {
        // no animation, plain swap every 2s
        span.classList.add("show");
        setTimeout(()=>{
          i = (i+1) % MESSAGES.length;
          cycle();
        }, TOTAL_MS);
      }
    }

    cycle();
  });
})();






// Run only on the cart page
if (location.href.startsWith("https://mleha.com/ar/cart")) {
  (function () {
    const SUBTOTAL_THRESHOLD = 346.95; // = 399 incl. VAT
    const PRODUCT_OPTIONS_SELECTOR = 'salla-product-options[product-id="3014694887033630745"]';
    const BADGE_ID = "ml-free-box-badge";

    // ===== Styles =====
    const style = document.createElement("style");
    style.textContent = `
      #${BADGE_ID} {
        display: flex; align-items: center; gap: 10px;
        background: #f9f5f5;
        border: 1px solid #f0d9d8;
        color: #9d3d38;
        border-radius: 12px;
        padding: 10px 12px;
        margin-bottom: 10px;
        font-size: 14px; font-weight: 700;
        direction: rtl;
        box-shadow: 0 6px 14px rgba(0,0,0,0.06);
        transform: translateY(0);
        transition: transform .2s ease, opacity .2s ease;
        opacity: 1;
      }
      #${BADGE_ID}.is-hidden { opacity: 0; transform: translateY(-4px); }
      #${BADGE_ID} .icon {
        width: 22px; height: 22px; border-radius: 6px;
        background: #9d3d38; color: #fff;
        display: inline-flex; align-items: center; justify-content: center;
        font-size: 14px; flex: 0 0 22px;
      }
      #${BADGE_ID} .text { line-height: 1.35; }
      #${BADGE_ID} .hl { background: #9d3d38; color: #fff; padding: 2px 6px; border-radius: 8px; margin: 0 2px; }
      #${BADGE_ID} .sub { font-weight: 600; opacity: .9; font-size: 12px; display:block; margin-top:2px;}
    `;
    document.head.appendChild(style);

    // ===== Helpers =====
    const parsePrice = (txt) => {
      if (!txt) return NaN;
      let s = txt.replace(/[^\d,.\-]/g, "");
      if (/,/.test(s) && /\,\d{1,2}$/.test(s)) s = s.replace(/\./g, "").replace(",", ".");
      else s = s.replace(/,/g, "");
      const v = parseFloat(s);
      return isNaN(v) ? NaN : v;
    };

    function findSubtotalEl() {
      const candidates = [
        '[data-cart-subtotal]',
        '.summary__subtotal .price',
        '.cart-summary .subtotal .price',
        '.cart-summary [data-value="subtotal"]',
        '.s-cart-summary [data-price]',
        '.cart__summary .price',
        '[data-cart-total]'
      ];
      for (const sel of candidates) {
        const el = document.querySelector(sel);
        if (el && /\d/.test(el.textContent)) return el;
      }
      return null;
    }

    function getSubtotal() {
      const el = findSubtotalEl();
      return el ? parsePrice(el.textContent) : NaN;
    }

    function getOptionsContainer() {
      const opts = document.querySelector(PRODUCT_OPTIONS_SELECTOR);
      if (!opts) return null;
      return (
        opts.querySelector(".s-product-options-option-container") ||
        opts.querySelector(".s-product-options-wrapper") ||
        opts
      );
    }

    function removeDupesKeepOne() {
      const all = Array.from(document.querySelectorAll(`#${BADGE_ID}`));
      if (all.length <= 1) return;
      all.slice(1).forEach(n => n.remove());
    }

    function ensureUI(meets) {
      const container = getOptionsContainer();
      if (!container) return;
      removeDupesKeepOne();

      let badge = document.getElementById(BADGE_ID);

      if (meets) {
        // Hide options
        container.style.display = "none";

        if (!badge) {
          badge = document.createElement("div");
          badge.id = BADGE_ID;
          badge.className = "is-hidden";
          badge.innerHTML = `
            <span class="icon" aria-hidden="true">🎁</span>
            <span class="text">
              صندوق التغليف الفاخر <span class="hl">مجّاني</span> مع طلبك
              <span class="sub">المجموع وصل إلى<b>٣٩٩</b> (شامل الضريبة) أو أكثر</span>
            </span>
          `;
          container.parentNode.prepend(badge);
          requestAnimationFrame(() => badge.classList.remove("is-hidden"));
        } else {
          badge.classList.remove("is-hidden");
        }
      } else {
        // Show options back
        container.style.display = "";

        if (badge) {
          badge.classList.add("is-hidden");
          setTimeout(() => {
            const b = document.getElementById(BADGE_ID);
            if (b) b.remove();
          }, 200);
        }
      }
      removeDupesKeepOne();
    }

    function refresh() {
      const subtotal = getSubtotal();
      if (isNaN(subtotal)) return;
      const meets = subtotal + 0.001 >= SUBTOTAL_THRESHOLD;
      ensureUI(meets);
    }

    refresh();

    const observer = new MutationObserver(() => {
      clearTimeout(refresh._t);
      refresh._t = setTimeout(refresh, 120);
    });
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });

    setTimeout(refresh, 600);
    setTimeout(refresh, 1500);
  })();
}


document.querySelectorAll('section.animated-text .animated-text__inner ul').forEach(ul => {
  const firstItem = ul.querySelector('li');
  if (firstItem) {
    ul.innerHTML = '';
    ul.appendChild(firstItem);
  }
});

// 2️⃣ عند تحميل الصفحة، اترك فقط النص الأول وأظهره
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('section.animated-text .animated-text__inner ul').forEach(ul => {
    const firstItem = ul.querySelector('li');
    if (firstItem) {
      ul.innerHTML = '';
      ul.appendChild(firstItem);       // أضف النص الأول فقط
      firstItem.style.display = "block"; // أظهره
    }
  });
});