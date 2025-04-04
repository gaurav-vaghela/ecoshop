import React, { useState } from 'react';
import { Combobox } from '@headlessui/react';
import { Check, ChevronDown, Tag } from 'lucide-react';

interface Category {
  name: string;
  subcategories: string[];
}

interface CategorySelectProps {
  categories: Category[];
  selectedCategory: string;
  onSelect: (category: string) => void;
}

export const CategorySelect: React.FC<CategorySelectProps> = ({
  categories,
  selectedCategory,
  onSelect,
}) => {
  const [query, setQuery] = useState('');

  const filteredCategories = query === ''
    ? categories
    : categories.filter((category) =>
        category.name.toLowerCase().includes(query.toLowerCase()) ||
        category.subcategories.some(sub => sub.toLowerCase().includes(query.toLowerCase()))
      );

  return (
    <div className="w-full">
      <Combobox value={selectedCategory} onChange={onSelect}>
        <div className="relative">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Tag className="h-5 w-5 text-gray-400" />
            </div>
            <Combobox.Input
              className="w-full pl-10 pr-10 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              placeholder="Search categories..."
              onChange={(event) => setQuery(event.target.value)}
              displayValue={(category: string) => category}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </Combobox.Button>
          </div>
          <Combobox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {filteredCategories.length === 0 && query !== '' ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                Nothing found.
              </div>
            ) : (
              <>
                <Combobox.Option
                  value="All"
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 px-4 ${
                      active ? 'bg-teal-600 text-white' : 'text-gray-900'
                    }`
                  }
                >
                  {({ selected, active }) => (
                    <div className="flex items-center justify-between">
                      <span className={`block truncate ${selected ? 'font-semibold' : ''}`}>
                        All Categories
                      </span>
                      {selected && <Check className="h-4 w-4" />}
                    </div>
                  )}
                </Combobox.Option>
                {filteredCategories.map((category) => (
                  <React.Fragment key={category.name}>
                    <Combobox.Option
                      value={category.name}
                      className={({ active }) =>
                        `relative cursor-pointer select-none py-2 px-4 ${
                          active ? 'bg-teal-600 text-white' : 'text-gray-900'
                        }`
                      }
                    >
                      {({ selected, active }) => (
                        <div className="flex items-center justify-between">
                          <span className={`block truncate ${selected ? 'font-semibold' : ''}`}>
                            {category.name}
                          </span>
                          {selected && <Check className="h-4 w-4" />}
                        </div>
                      )}
                    </Combobox.Option>
                    {category.subcategories.map((sub) => (
                      <Combobox.Option
                        key={sub}
                        value={sub}
                        className={({ active }) =>
                          `relative cursor-pointer select-none py-2 pl-8 pr-4 ${
                            active ? 'bg-teal-600 text-white' : 'text-gray-600'
                          }`
                        }
                      >
                        {({ selected }) => (
                          <div className="flex items-center justify-between">
                            <span className={`block truncate ${selected ? 'font-semibold' : ''}`}>
                              {sub}
                            </span>
                            {selected && <Check className="h-4 w-4" />}
                          </div>
                        )}
                      </Combobox.Option>
                    ))}
                  </React.Fragment>
                ))}
              </>
            )}
          </Combobox.Options>
        </div>
      </Combobox>
    </div>
  );
};