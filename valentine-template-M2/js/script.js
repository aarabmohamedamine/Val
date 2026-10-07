// تفعيل تأثير الكتابة
const typingText = document.getElementById('typingText');
const messages = [
    "أنتِ أجمل هدية في حياتي",
    "كل يوم معكِ هو عيد حب",
    "أنتِ سبب سعادتي",
    "أحبكِ أكثر مما تتخيلين"
];
let messageIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    if (!typingText) return;
    
    const currentMessage = messages[messageIndex];
    
    if (isDeleting) {
        typingText.textContent = currentMessage.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentMessage.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentMessage.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        messageIndex = (messageIndex + 1) % messages.length;
        setTimeout(typeEffect, 500);
    } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
}

// تشغيل الموسيقى
const musicBtn = document.getElementById('musicBtn');
const backgroundMusic = document.getElementById('backgroundMusic');
let isPlaying = false;

if (musicBtn && backgroundMusic) {
    musicBtn.addEventListener('click', function() {
        if (isPlaying) {
            backgroundMusic.pause();
            musicBtn.innerHTML = '<i class="fas fa-music"></i>';
        } else {
            backgroundMusic.play().catch(e => {
                console.log("لم يتم تشغيل الموسيقى تلقائياً. يحتاج المستخدم إلى التفاعل أولاً.");
            });
            musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
        }
        isPlaying = !isPlaying;
    });
}

// فتح وإغلاق الرسالة - الإصلاح الرئيسي هنا
const envelope = document.getElementById('envelope');
const letterContent = document.getElementById('letterContent');
let letterOpen = false;

if (envelope && letterContent) {
    envelope.addEventListener('click', function() {
        console.log("الظرف تم النقر عليه!");
        
        if (!letterOpen) {
            letterContent.style.display = 'block';
            envelope.style.transform = 'translateY(-20px)';
            envelope.style.boxShadow = '0 20px 40px rgba(233, 30, 99, 0.3)';
            letterOpen = true;
            
            // إظهار رسالة عائمة
            showFloatingMessage('💖 رسالة حب مفتوحة!');
            
            // إضافة تأثير اهتزاز للظرف
            this.style.animation = 'shake 0.5s';
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
        } else {
            letterContent.style.display = 'none';
            envelope.style.transform = 'translateY(0)';
            envelope.style.boxShadow = '0 10px 30px rgba(233, 30, 99, 0.2)';
            letterOpen = false;
        }
    });
}

// زر افتح رسالتي
const openLetterBtn = document.getElementById('openLetterBtn');
if (openLetterBtn) {
    openLetterBtn.addEventListener('click', function() {
        console.log("زر افتح رسالتي تم النقر عليه!");
        
        // التمرير إلى قسم الرسالة
        document.getElementById('message').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
        
        // فتح الرسالة بعد تأخير قصير
        setTimeout(() => {
            if (envelope && !letterOpen) {
                envelope.click(); // تنفيذ النقر على الظرف
            }
        }, 1000);
        
        // تأثير زر
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
}

// فتح وإغلاق الهدية
const giftBox = document.getElementById('giftBox');
const giftMessage = document.getElementById('giftMessage');
const closeGiftBtn = document.getElementById('closeGiftBtn');
let giftOpen = false;

if (giftBox && giftMessage) {
    giftBox.addEventListener('click', function() {
        console.log("الهدية تم النقر عليها!");
        
        if (!giftOpen) {
            giftMessage.style.display = 'block';
            giftBox.style.display = 'none';
            giftOpen = true;
            
            // إظهار رسالة عائمة
            showFloatingMessage('🎁 الهدية مفتوحة!');
            
            // تأثير اهتزاز
            this.style.animation = 'shake 0.5s';
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
        }
    });
}

if (closeGiftBtn && giftMessage && giftBox) {
    closeGiftBtn.addEventListener('click', function() {
        giftMessage.style.display = 'none';
        giftBox.style.display = 'block';
        giftOpen = false;
        
        // إظهار رسالة عائمة
        showFloatingMessage('💝 الهدية مغلقة!');
    });
}

// زر المفاجأة
const surpriseBtn = document.getElementById('surpriseBtn');
if (surpriseBtn) {
    surpriseBtn.addEventListener('click', function() {
        console.log("زر المفاجأة تم النقر عليه!");
        createHearts(50);
        showFloatingMessage('💝 مفاجأة حلوة!');
        
        // تأثير اهتزاز
        this.style.animation = 'shake 0.5s';
        setTimeout(() => {
            this.style.animation = '';
        }, 500);
    });
}

// زر الحب النهائي
const finalLoveBtn = document.getElementById('finalLoveBtn');
const loveMeter = document.getElementById('loveMeter');
const lovePercent = document.getElementById('lovePercent');
let loveLevel = 100;

if (finalLoveBtn && loveMeter && lovePercent) {
    finalLoveBtn.addEventListener('click', function() {
        console.log("زر الحب النهائي تم النقر عليه!");
        
        if (loveLevel < 100) {
            loveLevel += 10;
            if (loveLevel > 100) loveLevel = 100;
        } else {
            loveLevel = 100;
        }
        
        loveMeter.style.width = loveLevel + '%';
        lovePercent.textContent = loveLevel + '%';
        
        createHearts(30);
        showFloatingMessage('❤️ الحب يزداد!');
        
        // تأثير زر
        this.style.transform = 'scale(0.9)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
}

// شريط الذكريات
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const memoryCards = document.querySelectorAll('.memory-card');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function updateSlider() {
    memoryCards.forEach((card, index) => {
        card.classList.remove('active');
        if (index === currentSlide) {
            card.classList.add('active');
        }
    });
    
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentSlide) {
            dot.classList.add('active');
        }
    });
}

if (prevBtn) {
    prevBtn.addEventListener('click', function() {
        currentSlide = (currentSlide - 1 + memoryCards.length) % memoryCards.length;
        updateSlider();
    });
}

if (nextBtn) {
    nextBtn.addEventListener('click', function() {
        currentSlide = (currentSlide + 1) % memoryCards.length;
        updateSlider();
    });
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
        currentSlide = index;
        updateSlider();
    });
});

// دالة لإنشاء قلوب متحركة
function createHearts(count) {
    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '100vh';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        heart.style.opacity = '0.7';
        heart.style.zIndex = '9999';
        heart.style.pointerEvents = 'none';
        heart.style.animation = `float ${Math.random() * 3 + 2}s linear forwards`;
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            if (heart.parentNode) {
                heart.remove();
            }
        }, 3000);
    }
}

// دالة لإظهار الرسائل العائمة
function showFloatingMessage(text) {
    const floatingMsg = document.getElementById('floatingMessage');
    if (!floatingMsg) return;
    
    floatingMsg.innerHTML = text;
    floatingMsg.style.display = 'block';
    
    setTimeout(() => {
        floatingMsg.style.display = 'none';
    }, 3000);
}

// إضافة أنماط CSS ديناميكية للاهتزاز
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        50% { transform: translateX(5px); }
        75% { transform: translateX(-5px); }
        100% { transform: translateX(0); }
    }
    
    @keyframes float {
        0% { transform: translateY(100vh) rotate(0deg); opacity: 0.7; }
        100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
    }
`;
document.head.appendChild(style);

// تهيئة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    console.log("الصفحة تم تحميلها!");
    
    // بدء تأثير الكتابة
    setTimeout(typeEffect, 1000);
    
    // إنشاء قلوب في الخلفية
    setInterval(() => {
        createHearts(1);
    }, 3000);
    
    // إضافة قلوب إضافية للخلفية
    const heartsContainer = document.querySelector('.floating-hearts');
    if (heartsContainer) {
        for (let i = 0; i < 15; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'absolute';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = Math.random() * 100 + 'vh';
            heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
            heart.style.opacity = Math.random() * 0.1 + 0.05;
            heart.style.animation = `float ${Math.random() * 20 + 10}s infinite linear ${Math.random() * 5}s`;
            heartsContainer.appendChild(heart);
        }
    }
    
    // إضافة توهج للشموع
    const sparklesContainer = document.querySelector('.sparkles');
    if (sparklesContainer) {
        for (let i = 0; i < 20; i++) {
            const sparkle = document.createElement('div');
            sparkle.innerHTML = '✦';
            sparkle.style.position = 'absolute';
            sparkle.style.left = Math.random() * 100 + 'vw';
            sparkle.style.top = Math.random() * 100 + 'vh';
            sparkle.style.fontSize = (Math.random() * 15 + 8) + 'px';
            sparkle.style.opacity = Math.random() * 0.2 + 0.1;
            sparkle.style.animation = `sparkle ${Math.random() * 10 + 5}s infinite linear ${Math.random() * 3}s`;
            sparklesContainer.appendChild(sparkle);
        }
    }
    
    // التأكد من أن الأحداث تعمل
    console.log("عناصر الصفحة:");
    console.log("الظرف:", envelope);
    console.log("محتويات الرسالة:", letterContent);
    console.log("زر افتح رسالتي:", openLetterBtn);
    console.log("الهدية:", giftBox);
    console.log("زر المفاجأة:", surpriseBtn);
});

// إضافة console.log للتحقق من النقرات
document.addEventListener('click', function(e) {
    console.log("تم النقر على:", e.target.tagName, e.target.id || e.target.className);
});




const recipientName = document.querySelector('#lovedName')

recipientName.textContent = CONFIG.Recipientname