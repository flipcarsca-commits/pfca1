import React from 'react';
import { X, Type, CheckSquare, PenTool, Lock, AlertCircle, HelpCircle } from 'lucide-react';
import { FormField } from '../utils/pdfUtils';

interface FormPropertiesPanelProps {
    field: FormField;
    onUpdate: (id: string, updates: Partial<FormField>) => void;
    onClose: () => void;
}

export const FormPropertiesPanel: React.FC<FormPropertiesPanelProps> = ({ field, onUpdate, onClose }) => {
    return (
        <div className="w-72 bg-white border-l border-gray-200 flex flex-col shadow-xl animate-in slide-in-from-right-10 duration-200 z-10">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                <h3 className="font-bold text-gray-700 flex items-center gap-2">
                    {field.type === 'text' && <Type size={16} />}
                    {field.type === 'checkbox' && <CheckSquare size={16} />}
                    {field.type === 'signature' && <PenTool size={16} />}
                    Properties
                </h3>
                <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
                    <X size={18} />
                </button>
            </div>

            <div className="p-4 space-y-6 overflow-y-auto flex-grow">
                {/* Field Name */}
                <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1">
                        Field Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        value={field.name || field.id}
                        onChange={(e) => onUpdate(field.id, { name: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-canada-red focus:border-transparent outline-none transition-all text-sm font-medium font-mono"
                        placeholder="e.g. client_name"
                    />
                    <p className="text-[10px] text-gray-400">Unique identifier for data mapping.</p>
                </div>

                {/* Label / Tooltip */}
                <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1">
                        <HelpCircle size={10} /> Tooltip / Label
                    </label>
                    <input
                        type="text"
                        value={field.label || ''}
                        onChange={(e) => onUpdate(field.id, { label: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-canada-red focus:border-transparent outline-none transition-all text-sm"
                        placeholder="Helper text on hover..."
                    />
                </div>

                {/* Toggles */}
                <div className="space-y-4 pt-2">
                    <label className="flex items-center justify-between cursor-pointer group">
                        <span className="text-sm font-medium text-gray-700 flex items-center gap-2">
                            <AlertCircle size={14} className="text-gray-400 group-hover:text-canada-red transition-colors" /> Required
                        </span>
                        <div className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={field.required || false}
                                onChange={(e) => onUpdate(field.id, { required: e.target.checked })}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-canada-red"></div>
                        </div>
                    </label>

                    <label className="flex items-center justify-between cursor-pointer group">
                        <span className="text-sm font-medium text-gray-700 flex items-center gap-2">
                            <Lock size={14} className="text-gray-400 group-hover:text-canada-red transition-colors" /> Read Only
                        </span>
                        <div className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={field.readOnly || false}
                                onChange={(e) => onUpdate(field.id, { readOnly: e.target.checked })}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-canada-red"></div>
                        </div>
                    </label>
                </div>
            </div>

            <div className="p-4 bg-gray-50 border-t border-gray-100 text-center">
                <p className="text-xs text-gray-400">Changes apply automatically.</p>
            </div>
        </div>
    );
};
