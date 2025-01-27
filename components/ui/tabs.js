"use client"; // Ensure this file is treated as a client component

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export const Tabs = ({ children, defaultValue, className }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <div className={clsx('tabs-container', className)}>
      {React.Children.map(children, (child) => {
        if (child.type === TabsList) {
          return React.cloneElement(child, { activeTab, setActiveTab });
        }
        if (child.type === TabsContent && child.props.value === activeTab) {
          return child;
        }
        return null;
      })}
    </div>
  );
};

export const TabsList = ({ children, activeTab, setActiveTab }) => (
  <div className="flex space-x-4 border-b">
    {React.Children.map(children, (child) =>
      React.cloneElement(child, { isActive: activeTab === child.props.value, onClick: () => setActiveTab(child.props.value) })
    )}
  </div>
);

export const TabsTrigger = ({ value, isActive, onClick, children }) => (
  <button
    onClick={onClick}
    className={clsx(
      'py-2 px-4 text-sm font-medium',
      isActive ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-indigo-600'
    )}
  >
    {children}
  </button>
);

export const TabsContent = ({ children, value }) => (
  <div className="py-4">
    {children}
  </div>
);

Tabs.propTypes = {
  children: PropTypes.node,
  defaultValue: PropTypes.string,
  className: PropTypes.string,
};

TabsList.propTypes = {
  children: PropTypes.node,
  activeTab: PropTypes.string,
  setActiveTab: PropTypes.func,
};

TabsTrigger.propTypes = {
  value: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

TabsContent.propTypes = {
  children: PropTypes.node,
  value: PropTypes.string,
};

export default Tabs;
