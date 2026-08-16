import { useState, useEffect } from 'react';

export default function Header() {
    return (
        <>
            <header className="header">
                <div className="header__logo">
                    <h1>dumbstudy</h1>
                </div>
                <nav className="header__nav">
                    <ul className="button-cont button-cont--horizontal">
                        <li className="button-cont__item">
                            <a href="" className="link link--textual">link1</a>
                        </li>
                        <li className="button-cont__item">
                            <a href="" className="link link--textual">link2</a>
                        </li>
                        <li className="button-cont__item">
                            <a href="" className="link link--textual">link3</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}