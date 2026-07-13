/**
 * SIRMARITAN NEWS - Unified Production-Grade Engine Matrix
 * Decoupled CMS Data Pipeline & Error-Proof Front-End Router
 * Built for Modern Browsers & Strict AdSense Structural Compliance
 */

// ==========================================================================
// 01. DYNAMIC RICH ARTIFACT PIPELINE LOADER
// ==========================================================================
let ARTICLES = [];

// Fetch articles dynamically from the CMS data directory
async function loadArticlesPipeline() {
    try {
        // Fallback structural base array to keep site populated if CMS data folder is empty initially
        const fallbackData = [
            {
                id: 1,
                title: "Global Summit Outlines Strategic Plan for Next-Generation Sustainable Energy Grid Infrastructure",
                excerpt: "World leaders, municipal policy developers, and clean infrastructure engineering teams have reached a comprehensive structural accord detailing carbon reduction benchmarks by 2035.",
                content: `
                    <p>In an unprecedented international convergence, delegates from over eighty-five sovereign nations have finalized design parameters for the new Global Synthetic Grid Protocol (GSGP). The policy baseline enforces deep legislative accountability metrics on localized industrial centers while accelerating public funding pipelines for utility-scale energy networks.</p>
                    <p>Technical engineering taskforces detailed extensive infrastructural changes that mandate immediate upgrades to high-capacity thermal distribution models. By deploying high-capacity salt-battery storage compounds along major distribution nexuses, energy loss during long-range transfers can be minimized by nearly twenty-two percent over current line metrics.</p>
                    <p>Environmental systems analysts confirm this transformation path directly decouples standard economic scalability metrics from traditional heavy grid resource degradation. Critics worry implementation spending timelines could disrupt municipal budget structures; however, long-form capital amortizations argue consumer savings will outpace structural setup debts before the end of the upcoming decade.</p>
                `,
                category: "world",
                author: "Evelyn Vance",
                publishDate: "July 13, 2026",
                readTime: "5 min read",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
                trending: true,
                popularRank: 1
            },
            {
                id: 2,
                title: "Quantum Neural Compilers Achieve Production Milestones Inside Coherent Hardware Processors",
                excerpt: "Silicon Valley laboratory environments deliver deterministic structural runtimes operating complex mathematical calculations natively across multi-state processing fabrics.",
                content: `
                    <p>Advanced engineering units have verified successful software parsing operations on legacy open-source standard libraries executing entirely within low-temperature multi-state coherent quantum matrices. This operational milestone directly circumvents traditional coherence degradation constraints that have limited real-world lab environments for over two decades.</p>
                    <p>The compiler translation engine targets state errors directly by executing predictive algorithms across redundant micro-gate pathways. Enterprise cloud application firms estimate server routine processing speeds could scale exponentially within weeks following the implementation of direct web API connections to consumer platforms.</p>
                    <p>Further trials are underway to test how these processing systems perform during extreme load spikes. Data verification experts maintain that data-handling performance optimization stands to reshape artificial simulation models, molecular structure modeling pipelines, and financial risk tracking maps permanently.</p>
                `,
                category: "technology",
                author: "Marcus Chen",
                publishDate: "July 12, 2026",
                readTime: "7 min read",
                image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=800&q=80",
                trending: true,
                popularRank: 2
            },
            {
                id: 3,
                title: "Central Monetary Entities Synchronize Rates to Insulate Markets from Supply Portfolio Shifts",
                excerpt: "Global financial regulatory agencies issue joint structural directives aimed at dampening market volatility through asset liquid-layer interventions.",
                content: `
                    <p>Central banking syndicates coordinated major monetary balance modifications early this morning to stabilize cross-border manufacturing indices ahead of fiscal closing shifts. The multi-regional adjustment introduces structured interest corridor protections designed to safeguard supply chain transactions from volatile valuation swings.</p>
                    <p>Market observers noted immediate improvements in commodity options processing speeds and trading volume curves across key international financial hubs shortly after the announcement. The unified framework signals strong institutional alignment against macro inflation risks stemming from recent oceanic logistics bottlenecks.</p>
                    <p>Industrial manufacturing coalitions expressed optimism, noting that standardized credit pathways help maintain long-term capital spending allocations for factories. Meanwhile, consumer retail analytics firms suggest these stabilized metrics will help normalize cost structures on imported goods before the Q4 peak season.</p>
                `,
                category: "business",
                author: "Sarah Jenkins",
                publishDate: "July 11, 2026",
                readTime: "6 min read",
                image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80",
                trending: false,
                popularRank: 3
            }
        ];

        // System lookups real database written by the visual admin panel dashboard
        const response = await fetch('/data/articles/index.json').catch(() => null);
        if (response && response.ok) {
            ARTICLES = await response.json();
        } else {
            ARTICLES = fallbackData;
        }
    } catch (e) {
        ARTICLES = fallbackData;
    }
    
    // Bootstrap user interface lifecycle components
    executeGlobalApplicationRoutines();
}

// ==========================================================================
// 02. CORE LIFE-CYCLE INSTANTIATION ROUTINES
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    loadArticlesPipeline(); // Starts content loader loop cleanly
});

function executeGlobalApplicationRoutines() {
    initTicker();
    initScrollMonitoring();
    initGlobalSearch();
    
    if (document.getElementById('homepage-marker')) {
        initHomepage();
    } else if (document.getElementById('article-marker')) {
        initArticlePage();
    }
}

// ==========================================================================
// 03. THEME TOKENS CONTROL ENGINE
// ==========================================================================
function initTheme() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (!themeToggleBtn) return;

    const savedTheme = localStorage.getItem('sirmaritan-theme') || 
                       (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('sirmaritan-theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    const iconNode = document.querySelector('#theme-toggle i');
    if (!iconNode) return;
    iconNode.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// ==========================================================================
// 04. TICKER INJECTION LOOPS
// ==========================================================================
function initTicker() {
    const tickerContainer = document.getElementById('ticker-strip');
    if (!tickerContainer) return;
    
    tickerContainer.innerHTML = ARTICLES.map(art => `
        <a href="article.html?id=${art.id}" class="ticker-item">${art.title}</a>
    `).join('');
}

// ==========================================================================
// 05. HOMEPAGE SYSTEM CONTROLLERS
// ==========================================================================
function initHomepage() {
    renderSlider();
    renderLatestGrid(ARTICLES);
    renderTrendingSidebar();
}

function renderSlider() {
    const sliderContainer = document.getElementById('hero-slider');
    if (!sliderContainer) return;

    // Filters down articles marked as trending for the header matrix Carousel
    const trendingSet = ARTICLES.filter(a => a.trending);
    const displaySet = trendingSet.length > 0 ? trendingSet : ARTICLES;

    sliderContainer.innerHTML = displaySet.map((art, idx) => `
        <div class="slide ${idx === 0 ? 'active' : ''}" data-index="${idx}">
            <img src="${art.image}" alt="${art.title}" class="slide-img" loading="eager">
            <div class="slide-overlay">
                <span class="badge">${art.category}</span>
                <h2 class="slide-title"><a href="article.html?id=${art.id}">${art.title}</a></h2>
                <div class="card-meta" style="color: #cbd5e1;">
                    <span>By ${art.author}</span> • <span>${art.publishDate}</span>
                </div>
            </div>
        </div>
    `).join('');

    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    if (slides.length <= 1) return;

    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 6000);
}

function renderLatestGrid(dataset) {
    const gridContainer = document.getElementById('latest-news-grid');
    if (!gridContainer) return;

    if (dataset.length === 0) {
        gridContainer.innerHTML = `<p style="padding: 2rem; color: var(--text-light); grid-column: 1/-1; text-align: center;">No articles discovered matching the selected index search queries.</p>`;
        return;
    }

    gridContainer.innerHTML = dataset.map(art => `
        <article class="card-standard">
            <div class="card-media">
                <img src="${art.image}" alt="${art.title}" loading="lazy">
            </div>
            <div class="card-body">
                <div class="card-meta">
                    <span class="badge">${art.category}</span>
                    <span>${art.publishDate}</span>
                </div>
                <h3 class="card-headline">
                    <a href="article.html?id=${art.id}">${art.title}</a>
                </h3>
                <p class="card-excerpt">${art.excerpt}</p>
                <a href="article.html?id=${art.id}" class="btn-link" aria-label="Read full article text tracking ${art.title}">Read More &rarr;</a>
            </div>
        </article>
    `).join('');
}

function renderTrendingSidebar() {
    const sidebarContainer = document.getElementById('trending-ranked-list');
    if (!sidebarContainer) return;

    const rankedItems = [...ARTICLES].sort((a, b) => a.popularRank - b.popularRank).slice(0, 5);

    sidebarContainer.innerHTML = rankedItems.map(art => `
        <li>
            <span class="rank-number">0${art.popularRank}</span>
            <div>
                <span class="badge" style="font-size:0.6rem; padding: 1px 4px; margin-bottom:0.25rem;">${art.category}</span>
                <h4 class="card-mini-title">
                    <a href="article.html?id=${art.id}">${art.title}</a>
                </h4>
            </div>
        </li>
    `).join('');
}

// ==========================================================================
// 06. SINGLE ARTICLE VIEW INTERFACES (Defensive Error Guards Active)
// ==========================================================================
function initArticlePage() {
    const articleMarker = document.getElementById('article-marker');
    if (!articleMarker) return; // Instantly exits if user is browsing index profiles

    const params = new URLSearchParams(window.location.search);
    let articleId = parseInt(params.get('id')) || 1;
    
    let article = ARTICLES.find(a => a.id === articleId);
    if (!article) article = ARTICLES[0];

    document.title = `${article.title} | SIRMARITAN NEWS`;
    
    const nodes = {
        categoryBadge: document.getElementById('art-category-badge'),
        breadcrumbCat: document.getElementById('art-breadcrumb-cat'),
        breadcrumbCurrent: document.getElementById('art-breadcrumb-current'),
        title: document.getElementById('art-title'),
        author: document.getElementById('art-author'),
        date: document.getElementById('art-date'),
        readTime: document.getElementById('art-readtime'),
        mainImg: document.getElementById('art-main-img'),
        bodyRender: document.getElementById('art-body-render')
    };

    if (nodes.breadcrumbCat) nodes.breadcrumbCat.textContent = article.category.toUpperCase();
    if (nodes.breadcrumbCurrent) nodes.breadcrumbCurrent.textContent = article.title;
    if (nodes.categoryBadge) nodes.categoryBadge.textContent = article.category;
    if (nodes.title) nodes.title.textContent = article.title;
    if (nodes.author) nodes.author.textContent = article.author;
    if (nodes.date) nodes.date.textContent = article.publishDate;
    if (nodes.readTime) nodes.readTime.textContent = article.readTime;
    
    if (nodes.mainImg) {
        nodes.mainImg.src = article.image;
        nodes.mainImg.alt = article.title;
    }
    
    if (nodes.bodyRender) nodes.bodyRender.innerHTML = article.content;

    setupArticleNavigation(articleId);
    setupCommentEngine();
}

function setupArticleNavigation(currentId) {
    const prevBtn = document.getElementById('nav-box-prev');
    const nextBtn = document.getElementById('nav-box-next');
    if (!prevBtn || !nextBtn) return;

    const prevArticle = ARTICLES.find(a => a.id === currentId - 1);
    const nextArticle = ARTICLES.find(a => a.id === currentId + 1);

    if (prevArticle) {
        prevBtn.href = `article.html?id=${prevArticle.id}`;
        const titleNode = prevBtn.querySelector('.nav-box-title');
        if (titleNode) titleNode.textContent = prevArticle.title;
        prevBtn.style.display = 'block';
    } else {
        prevBtn.style.display = 'none';
    }

    if (nextArticle) {
        nextBtn.href = `article.html?id=${nextArticle.id}`;
        const titleNode = nextBtn.querySelector('.nav-box-title');
        if (titleNode) titleNode.textContent = nextArticle.title;
        nextBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'none';
    }
}

function setupCommentEngine() {
    const form = document.getElementById('comment-form');
    const list = document.getElementById('render-comment-list');
    if (!form || !list) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const bodyText = document.getElementById('comment-body').value.trim();
        const nameText = document.getElementById('comment-name').value.trim();

        if(!bodyText || !nameText) return;

        const commentNode = document.createElement('div');
        commentNode.className = 'comment-node';
        commentNode.innerHTML = `
            <div class="comment-node-meta">
                <strong>${escapeHTML(nameText)}</strong>
                <span>Just Now</span>
            </div>
            <p style="font-size: 0.95rem; color: var(--text-muted); margin-top: 0.25rem;">${escapeHTML(bodyText)}</p>
        `;

        list.prepend(commentNode);
        form.reset();
    });
}

// ==========================================================================
// 07. REAL LIVE CLIENT-SIDE ENGINE FILTER
// ==========================================================================
function initGlobalSearch() {
    const searchInput = document.getElementById('global-search');
    const executeBtn = document.querySelector('.search-icon-btn');
    if(!searchInput) return;

    const performSearch = () => {
        const query = searchInput.value.toLowerCase().trim();
        
        if(!query && !document.getElementById('homepage-marker')) {
            window.location.href = 'index.html';
            return;
        }

        const filtered = ARTICLES.filter(art => 
            art.title.toLowerCase().includes(query) || 
            art.excerpt.toLowerCase().includes(query) ||
            art.category.toLowerCase().includes(query)
        );

        if(document.getElementById('homepage-marker')) {
            const heading = document.querySelector('#latest-news-grid').previousElementSibling;
            if(heading && heading.classList.contains('section-title')) {
                heading.textContent = `Search Matches: "${query ? query : 'All Content'}"`;
            }
            renderLatestGrid(filtered);
        } else {
            window.location.href = `index.html?search=${encodeURIComponent(query)}`;
        }
    };

    searchInput.addEventListener('keypress', (e) => {
        if(e.key === 'Enter') performSearch();
    });
    if(executeBtn) executeBtn.addEventListener('click', performSearch);

    const internalParams = new URLSearchParams(window.location.search);
    const initialQuery = internalParams.get('search');
    if(initialQuery && document.getElementById('homepage-marker')) {
        searchInput.value = initialQuery;
        performSearch();
    }
}

// ==========================================================================
// 08. INTERACTIVE UTILITIES & STRINGS ESCAPES
// ==========================================================================
function initScrollMonitoring() {
    const backBtn = document.getElementById('back-to-top');
    if(!backBtn) return;

    window.addEventListener('scroll', () => {
        if(window.scrollY > 400) {
            backBtn.classList.add('visible');
        } else {
            backBtn.classList.remove('visible');
        }
    });
}

function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
        tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
}
