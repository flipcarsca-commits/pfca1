import React from 'react';

interface PageLayoutProps {
    title: string;
    subtitle?: string;
    icon: React.ReactNode;
    children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ title, subtitle, icon, children }) => (
    <div className="max-w-4xl mx-auto px-6 py-12 animate-fade-in">
        <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 dark:bg-red-900/20 text-canada-red rounded-2xl mb-6 shadow-sm">
                {icon}
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">{title}</h1>
            {subtitle && <p className="text-xl text-gray-500 dark:text-gray-400">{subtitle}</p>}
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl shadow-gray-200/50 dark:shadow-black/20 border border-gray-100 dark:border-gray-700">
            {children}
        </div>
    </div>
);
