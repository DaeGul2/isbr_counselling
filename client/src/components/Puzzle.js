// Puzzle.js
import React from 'react';
import './Puzzle.css';


function Puzzle() {
    const numPieces = 24; // 퍼즐 조각 개수 증가

    return (
        <div className="puzzle-container">
            {/* 퍼즐 조각을 numPieces만큼 반복 생성 */}
            {[...Array(numPieces)].map((_, index) => (
                <div key={index} className={`puzzle-piece piece${index + 1}`}>
                    <svg viewBox="0 0 100 100" className="puzzle-svg">
                        <path d="M10 10 C 30 30, 70 30, 90 10 L 90 90 C 70 70, 30 70, 10 90 Z" />
                    </svg>
                </div>
            ))}

            
        </div>
    );
}

export default Puzzle;
