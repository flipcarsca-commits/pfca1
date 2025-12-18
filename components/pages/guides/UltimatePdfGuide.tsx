import React from 'react';
import { BookOpen, Shield, Zap, Lock, Globe, CheckCircle, ArrowRight, FileText, Trash2, RotateCw, Image, Search, MousePointer2, Settings, Users, Cpu, Accessibility, Globe2, Heart } from 'lucide-react';
import { Language } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';

interface GuideProps {
    lang: Language;
    onNavigate: (view: any, path?: string) => void;
}

const guideContent = {
    en: {
        seo: {
            title: "Ultimate 2025 Guide to Free PDF Tools | Secure Document Editing | pdfcanada.ca",
            desc: "The definitive guide to managing PDFs online in 2025. Master deleting pages, rotation, HEIC conversion, OCR, and document security. 100% free Canadian PDF tools guide."
        },
        h1: "The Ultimate Guide to Modern PDF Management (2025 Edition)",
        subtitle: "A comprehensive deep-dive into editing, converting, and securing your PDF documents without expensive software.",

        sections: [
            {
                id: "intro",
                title: "Introduction: Why PDFs Still Rule the World",
                content: `In the rapidly evolving landscape of digital communication, the Portable Document Format (PDF) remains an unshakeable cornerstone. Created by Adobe in the early 1990s, the PDF was designed to solve a single, critical problem: how to share documents that look exactly the same on every device, regardless of hardware, software, or operating system. 

Today, billons of PDFs are created every year. They are the language of business, law, education, and government. However, while the format has remained stable, our requirements for interacting with it have grown significantly. We no longer just "read" PDFs; we need to manipulate them, sign them, convert them, and secure them. 

This guide serves as a beacon for anyone looking to navigate these tasks without falling into the "subscription trap" of traditional document software. We'll explore how modern technology allows for **free PDF tools online** that are faster and more secure than their desktop ancestors.`
            },
            {
                id: "privacy-revolution",
                title: "The Privacy Revolution: Local-First Processing",
                content: `For years, the phrase "online PDF editor" was synonymous with "security risk." Traditional tools operated on a simple but flawed model: you upload your file to their server, they process it, and you download the result. This created a massive vulnerability. Your private contracts, tax filings, and medical records were residing on a stranger's server, often indefinitely.

The birth of WebAssembly (Wasm) changed everything. WebAssembly is a technology that allows high-performance code (like PDF engines) to run directly inside your web browser at near-native speeds. 

**Why does this matter for your security?**
- **Zero Uploading**: Your document never leaves your RAM. It is read by the browser, processed by the local script, and the result is generated on your machine.
- **Physical Isolation**: Even if a developer's server were compromised, your documents wouldn't be there to steal.
- **Regulatory Compliance**: For industries like healthcare or law in Canada, keeping data within your control is often a legal requirement.

Tools like pdfcanada.ca are built on this "Local-First" philosophy, ensuring that your **secure PDF editing online** remains truly private.`
            },
            {
                id: "deleting-pages",
                title: "Efficiency 101: Deleting and Reordering Pages",
                content: `One of the most common administrative tasks is cleaning up a document. Whether it's a 200-page report where you only need the summary, or a scanned contract with five blank pages at the end, knowing how to **delete PDF pages free** is a massive time-saver.

A modern browser-based tool allows you to see the entire document structure at a glance. You can click to select, shift-click to batch-select, and remove pages instantly. 
- **Pro Tip**: Always check for "ghost" pages. Many automated scanning systems add a blank page at the end of a job. Removing these before sending a document to a client shows a higher level of professional attention to detail.
- **Organization**: Reordering is just as important as deleting. If you've scanned multiple pages and they're in the wrong order, a drag-and-drop interface is the most intuitive way to fix the flow of your document.`
            },
            {
                id: "rotation-fix",
                title: "The Scan Struggle: Mastering PDF Rotation",
                content: `We've all been there: you open a PDF, and it's sideways. Or worse, every second page is upside down. If you're using a standard PDF viewer, you might be able to rotate the *view*, but you can't *save* that change.

Using a dedicated **rotate PDF online** tool fixes this permanently. 
1. **Clockwise (90°)**: Perfect for landscape documents that were scanned in portrait mode.
2. **Counter-Clockwise (-90°)**: For when you need to flip back to standard orientation.
3. **180° Flip**: Essential for when a scanner tray was loaded incorrectly.

When you rotate and save locally, the orientation metadata is updated in the file structure itself, ensuring that the recipient sees exactly what you see.`
            },
            {
                id: "conversion-magic",
                title: "Conversion Magic: HEIC, EPUB, and Beyond",
                content: `The world of digital formats is a messy one. Apple devices use HEIC for photos, Amazon Kindles prefer certain formats for e-books, and businesses demand PDFs. Navigating these transitions can be frustrating.

### HEIC to PDF: The Professional Bridge
The High-Efficiency Image Container (HEIC) is great for saving space on your iPhone, but it's notorious for failing to open on Windows PCs or government upload portals. By using a **HEIC to PDF converter**, you bridge that gap. You can combine multiple photos (like receipts or ID documents) into a single, professional PDF document in one step.

### EPUB and PDF: Documentation vs. Reading
While PDFs are great for fixed layouts, EPUBs are better for reading on small screens (like phones or e-readers) because the text can "reflow."
- **PDF to EPUB**: Conversion allows you to take a technical manual and read it comfortably on your Kindle.
- **EPUB to PDF**: Allows you to take an e-book and print it or share it in a format that looks identical for everyone.`
            },
            {
                id: "ocr-search",
                title: "Unlocking Text: The Power of OCR",
                content: `A PDF is often just a "container for images." When you scan a document, the computer doesn't see "words"; it sees "dark and light pixels." This makes the text non-selectable and, importantly, non-searchable.

**Optical Character Recognition (OCR)** is the technology that scans these images and identifies the characters within them. 
- **The Searchable PDF**: By using an **OCR PDF tool**, you can create a "transparent text layer" over the original scan. This means you can use \`Ctrl+F\` (or \`Cmd+F\`) to find specific terms inside a scanned document.
- **Data Extraction**: OCR allows you to copy text from a scanned invoice or a photo of a contract and paste it into a spreadsheet or a Word document.

In a modern office, having a **searchable PDF converter** is the difference between finding a file in 2 seconds and spending 20 minutes manually flipping through folders.`
            },
            {
                id: "interactive-pdfs",
                title: "Interactive Documents: Fillable Forms",
                content: `Static documents are becoming a relic of the past. If you need a client to provide information, sending them a PDF they have to print, sign, and scan back is a "friction point" that can lose you business.

Learning to **make PDF fillable online** is a game-changer for digital workflows. 
- **Text Fields**: For names, addresses, and long-form responses.
- **Checkboxes**: For multi-option selections.
- **Radio Buttons**: For "A, B, or C" choices.
- **Digital Signatures**: While not always legally equivalent to wet-ink signatures in every jurisdiction, a digital placeholder allows for a much faster preliminary agreement.

By adding these interactive elements, you transform a flat piece of digital paper into a powerful data-gathering tool.`
            },
            {
                id: "accessibility",
                title: "Digital Inclusivity: Making PDFs Accessible",
                content: `Accessibility is no longer "nice to have"; it is a legal and ethical requirement. A truly professional PDF should be readable by screen readers used by people with visual impairments. 

Tools that help you structure your PDF correctly—using headings, alt-text for images, and proper reading orders—ensure that your message reaches everyone. This guide emphasizes the importance of using **free PDF tools** that don't strip away accessibility metadata during the editing process.`
            },
            {
                id: "canadian-identity",
                title: "The 'Polite Canadian' Philosophy",
                content: `Why "pdfcanada.ca"? In a world of global tech giants, there is a distinct value in local, niche services. The "Polite Canadian" philosophy is built on three pillars:
1. **Utility over Profit**: Building tools that solve real problems first, rather than looking for ways to charge users at every turn.
2. **Privacy as a Right**: Not a feature you pay extra for.
3. **Simplicity**: No "bloatware," no "dark patterns" trying to trick you into a subscription, and no requirement to create an account.

By providing **free Canadian PDF tools**, we aim to support students, small business owners, and citizens who just want to get their digital tasks done quickly and safely.`
            },
            {
                id: "conclusion",
                title: "Conclusion: Empowering Your Digital Workspace",
                content: `Mastering the PDF is about more than just knowing where the "Rotate" button is. It's about understanding the technology you depend on and choosing tools that respect your time and your data. 

As we move deeper into 2025, the line between "desktop" and "web" software will continue to blur. The power that used to require a $500 software license is now available, for free, inside your browser. We hope this guide has empowered you to take control of your documents. 

Next time you need to **supprimer des pages PDF** or convert an obscure image format, remember that the most secure and efficient way to do it is right here, processed locally on your own machine. 

Welcome to the future of PDF management.`
            }
        ],

        faqTitle: "Frequently Asked Questions about PDF Tools",
        faqs: [
            {
                q: "What makes pdfcanada.ca different from other online PDF tools?",
                a: "Unlike most major services, pdfcanada.ca uses 'Local-First' processing. This means your private files are never uploaded to our servers; the conversion and editing happen entirely inside your browser's memory."
            },
            {
                q: "Is there a limit to how many files I can process?",
                a: "No. Because the processing is done on your own computer's hardware, we don't have to worry about server costs per file. You can use our tools as much as you need, for free."
            },
            {
                q: "Do I need to install any Chrome extensions or software?",
                a: "No installation is required. Our tools work in any modern web browser (Chrome, Safari, Firefox, Edge) on both desktop and mobile devices."
            },
            {
                q: "How do I create a searchable PDF from a scanned image?",
                a: "Use our OCR tool. It scans the 'pixels' of your image and identifies the text, adding an invisible layer of real text that you can search or copy."
            },
            {
                q: "Can I use these tools on my iPhone or Android phone?",
                a: "Absolutely. Our mobile-responsive design ensures that you can delete pages, rotate PDFs, or convert HEIC photos directly from your phone's browser while on the go."
            }
        ],

        cta: "Ready to take control of your documents?",
        ctaBtn: "Explore All Tools",
        related: "More Resources"
    },
    fr: {
        seo: {
            title: "Guide Ultime 2025 des Outils PDF Gratuits | Édition Sécurisée | pdfcanada.ca",
            desc: "Le guide définitif pour gérer vos PDF en ligne en 2025. Apprenez à supprimer des pages, pivoter, convertir HEIC et utiliser l'OCR gratuitement."
        },
        h1: "Le Guide Ultime de la Gestion Moderne des PDF (Édition 2025)",
        subtitle: "Un plongeon complet dans l'édition, la conversion et la sécurisation de vos documents PDF sans logiciel coûteux.",

        sections: [
            {
                id: "intro",
                title: "Introduction : Pourquoi le PDF domine toujours le monde",
                content: `Dans le paysage numérique d'aujourd'hui, le format PDF reste une pierre angulaire. Ce guide est une ressource précieuse pour tous ceux qui cherchent à gérer leurs documents sans tomber dans le piège des abonnements coûteux. Nous explorerons comment la technologie moderne permet des **outils PDF gratuits en ligne** plus rapides et plus sécurisés que jamais.`
            },
            {
                id: "privacy",
                title: "La Révolution de la Confidentialité : Traitement Local",
                content: `Pendant des années, les outils PDF en ligne étaient synonymes de risque. Aujourd'hui, grâce à WebAssembly, pdfcanada.ca traite vos fichiers directement dans votre navigateur. 
- **Zéro Téléchargement** : Vos documents ne quittent jamais votre mémoire vive (RAM).
- **Sécurité Garantie** : Vos données privées restent sous votre contrôle total.
- **Conformité** : Idéal pour les professionnels canadiens de la santé ou du droit.`
            },
            {
                id: "tasks",
                title: "Maîtriser les Tâches Essentielles",
                content: `Qu'il s'agisse de **supprimer des pages PDF** inutilement scannées ou de **pivoter un PDF** mal orienté, nos outils simplifient vos flux de travail. La gestion de vos documents devient intuitive et rapide.`
            }
        ],

        faqTitle: "Questions Fréquentes sur les Outils PDF",
        faqs: [
            {
                q: "Pourquoi choisir pdfcanada.ca ?",
                a: "Parce que nous privilégions votre vie privée avec le traitement local et offrons des outils totalement gratuits, sans publicité envahissante."
            }
        ],

        cta: "Prêt à prendre le contrôle de vos documents ?",
        ctaBtn: "Voir tous les outils",
        related: "Plus de ressources"
    }
};

export const UltimatePdfGuide: React.FC<GuideProps> = ({ lang, onNavigate }) => {
    const t = guideContent[lang];

    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": t.h1,
        "description": t.seo.desc,
        "author": {
            "@type": "Organization",
            "name": "pdfcanada.ca"
        }
    };

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/ultimate-pdf-guide"
                lang={lang}
                schema={schema}
            />
            <PageLayout title={t.h1} subtitle={t.subtitle} icon={<BookOpen size={32} />}>
                <div className="max-w-4xl mx-auto py-8">

                    {/* Floating Table of Contents for Desktop */}
                    <div className="bg-blue-50/50 dark:bg-blue-900/10 p-6 rounded-3xl border border-blue-100 dark:border-blue-800/30 mb-16">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4 flex items-center gap-2">
                            <MousePointer2 size={16} /> Table of Contents
                        </h3>
                        <nav className="grid md:grid-cols-2 gap-y-3 gap-x-12">
                            {t.sections.map((section, idx) => (
                                <a
                                    key={section.id}
                                    href={"#" + section.id}
                                    className="text-gray-600 dark:text-gray-400 hover:text-canada-red dark:hover:text-canada-red transition-all flex items-center gap-3 group"
                                >
                                    <span className="text-xs font-mono text-gray-400 group-hover:text-canada-red transition-colors">0{idx + 1}.</span>
                                    <span className="border-b border-transparent group-hover:border-canada-red/30">{section.title}</span>
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Stats or Trust Bar */}
                    <div className="flex flex-wrap justify-center gap-8 mb-20 py-8 border-y border-gray-100 dark:border-gray-800">
                        <div className="flex items-center gap-2 text-gray-500">
                            <Shield size={20} className="text-canada-red" />
                            <span className="text-sm font-medium">100% Private</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500">
                            <Globe size={20} className="text-canada-red" />
                            <span className="text-sm font-medium">Local-Only Processing</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500">
                            <Zap size={20} className="text-canada-red" />
                            <span className="text-sm font-medium">Zero Uploads</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500">
                            <Heart size={20} className="text-canada-red" />
                            <span className="text-sm font-medium">Proudly Canadian</span>
                        </div>
                    </div>

                    {/* Main Content Sections */}
                    <div className="space-y-24">
                        {t.sections.map((section, idx) => (
                            <section key={section.id} id={section.id} className="scroll-mt-24 group">
                                <div className="flex items-center gap-6 mb-8">
                                    <div className="bg-gray-100 dark:bg-gray-800 w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-canada-red transition-colors duration-500">
                                        <span className="text-2xl font-black text-gray-400 dark:text-gray-600 group-hover:text-white transition-colors">
                                            {idx + 1}
                                        </span>
                                    </div>
                                    <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                                        {section.title}
                                    </h2>
                                </div>

                                <div className="prose prose-xl dark:prose-invert max-w-none 
                                    prose-p:text-gray-600 dark:prose-p:text-gray-400 prose-p:leading-relaxed 
                                    prose-strong:text-gray-900 dark:prose-strong:text-white prose-strong:font-bold
                                    prose-headings:text-canada-red prose-headings:mt-12 prose-headings:mb-6
                                    prose-li:text-gray-600 dark:prose-li:text-gray-400">
                                    <p className="whitespace-pre-line">{section.content}</p>
                                </div>

                                {section.id === 'privacy-revolution' && (
                                    <div className="mt-12 p-8 bg-canada-red rounded-[2rem] text-white flex flex-col md:flex-row items-center gap-8 shadow-2xl shadow-red-500/20">
                                        <div className="bg-white/10 p-4 rounded-2xl">
                                            <Cpu size={48} />
                                        </div>
                                        <div>
                                            <h4 className="text-2xl font-bold mb-2">Powered by Your Local CPU</h4>
                                            <p className="text-white/80 leading-relaxed">
                                                We use WebAssembly technology to harness your computer's own processing power. Your files are converted into machine-readable bytes that never leave your browser window. This is the gold standard of data sovereignty.
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </section>
                        ))}
                    </div>

                    {/* Feature Highlight Grid */}
                    <div className="my-32 grid md:grid-cols-2 gap-4">
                        <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 flex items-start gap-4">
                            <Accessibility className="text-blue-500 shrink-0" size={24} />
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white mb-2">ADA Compliant</h4>
                                <p className="text-sm text-gray-500">All tools are designed with a keyboard-first focus and screen reader compatibility.</p>
                            </div>
                        </div>
                        <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 flex items-start gap-4">
                            <Globe2 className="text-green-500 shrink-0" size={24} />
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Multi-Language</h4>
                                <p className="text-sm text-gray-500">Native support for English and French to support the diverse Canadian landscape.</p>
                            </div>
                        </div>
                        <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 flex items-start gap-4">
                            <Settings className="text-purple-500 shrink-0" size={24} />
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Modern Standards</h4>
                                <p className="text-sm text-gray-500">Fully compliant with the latest ISO PDF 2.0 specifications for maximum compatibility.</p>
                            </div>
                        </div>
                        <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 flex items-start gap-4">
                            <Users className="text-orange-500 shrink-0" size={24} />
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white mb-2">User Centered</h4>
                                <p className="text-sm text-gray-500">Created by designers and engineers who believe tools should be simple and friction-free.</p>
                            </div>
                        </div>
                    </div>

                    {/* Rich FAQ with interactive feel */}
                    <div className="my-32">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
                            <div>
                                <span className="text-canada-red font-bold text-sm tracking-widest uppercase">Answers</span>
                                <h2 className="text-5xl font-black text-gray-900 dark:text-white mt-2">{t.faqTitle}</h2>
                            </div>
                            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full">
                                <Search size={16} className="text-gray-400" />
                                <span className="text-sm text-gray-500">Search FAQ</span>
                            </div>
                        </div>
                        <div className="grid gap-6">
                            {t.faqs.map((faq, i) => (
                                <div key={i} className="group p-8 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 hover:border-canada-red transition-all duration-300">
                                    <h5 className="flex items-center gap-4 text-xl font-bold text-gray-900 dark:text-white mb-4">
                                        <div className="bg-canada-red/10 text-canada-red p-2 rounded-lg group-hover:bg-canada-red group-hover:text-white transition-colors">
                                            <CheckCircle size={20} />
                                        </div>
                                        {faq.q}
                                    </h5>
                                    <p className="text-gray-600 dark:text-gray-400 pl-14 text-lg leading-relaxed">
                                        {faq.a}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Visual CTA Section */}
                    <div className="bg-gray-900 dark:bg-canada-red rounded-[3rem] p-16 text-center text-white relative overflow-hidden shadow-3xl">
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                            <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-canada-red rounded-full blur-3xl"></div>
                        </div>
                        <h2 className="text-5xl font-black mb-8 relative z-10 leading-tight">
                            Ready to Experience<br />
                            <span className="text-blue-400 dark:text-gray-900">True Document Freedom?</span>
                        </h2>
                        <button
                            onClick={() => onNavigate('HOME')}
                            className="relative z-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-12 py-5 rounded-full font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-xl"
                        >
                            {t.ctaBtn}
                        </button>
                        <p className="mt-8 text-white/60 font-medium tracking-wide italic">No Credit Card. No Account. Just Great Tools. 🇨🇦</p>
                    </div>

                    {/* Footer Nav for Related Guides */}
                    <div className="mt-32 pt-16 border-t border-gray-100 dark:border-gray-800">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-8">{t.related}</h4>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { name: 'How to Delete PDF Pages', path: '/guides/delete-pdf-pages', icon: Trash2 },
                                { name: 'Ultimate Rotation Guide', path: '/guides/rotate-pdf', icon: RotateCw },
                                { name: 'Converting Mobile HEIC', path: '/heic-to-pdf', icon: Image }
                            ].map((guide, i) => (
                                <button
                                    key={i}
                                    onClick={() => onNavigate('TOOL_PAGE', guide.path)}
                                    className="p-6 bg-gray-50 dark:bg-gray-800 rounded-3xl border border-transparent hover:border-canada-red hover:bg-white dark:hover:bg-gray-900 transition-all flex items-center justify-between group"
                                >
                                    <div className="flex items-center gap-4">
                                        <guide.icon className="text-canada-red" size={20} />
                                        <span className="font-bold text-gray-900 dark:text-white">{guide.name}</span>
                                    </div>
                                    <ArrowRight className="text-gray-300 group-hover:text-canada-red group-hover:translate-x-1 transition-all" size={20} />
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
            </PageLayout>
        </div>
    );
};
