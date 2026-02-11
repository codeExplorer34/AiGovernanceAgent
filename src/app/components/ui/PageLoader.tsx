"use client";
import React from "react";
import "./PageLoader.css";

interface PageLoaderProps {
    isLoading: boolean;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ isLoading }) => {
    if (!isLoading) return null;

    return (
        <div className="page-loader-overlay">
            <div className="page-loader-card">
                <div className="page-loader">
                    <p>loading</p>
                    <div className="page-loader-words">
                        <span className="page-loader-word">dashboard</span>
                        <span className="page-loader-word">analytics</span>
                        <span className="page-loader-word">governance</span>
                        <span className="page-loader-word">policies</span>
                        <span className="page-loader-word">dashboard</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
