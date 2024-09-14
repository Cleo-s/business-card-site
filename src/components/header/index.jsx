import React from 'react';

import Button from '../button/index';

import './header.scss';
import { useNavigate } from 'react-router';

function Header({ }) {
    const navigate = useNavigate();

    const handleHomePage = () => {

        navigate('/')
    }

    const handleAbout = () => {

        navigate('/about')
    }

    const handleContact = () => {

        navigate('/contact')
    }

    const handleBlog = () => {

        navigate('/blog')
    }

    const handleForDoctors = () => {

        navigate('/for-doctors')
    }
    return (
        <div className='header-div'>
            <p className='home-page-title'>
                Ваш лікар-ендокринолог
            </p>
            <section className='button-section'>
                <Button children={'Домашня сторінка'} className={'homepage'} onClick={handleHomePage} />
                <Button children={'Про мене'} className={'about'} onClick={handleAbout} />
                <Button children={'Зворотній зв`язок'} className={'contact'} onClick={handleContact} />
                <Button children={'Блог'} className={'blog'} onClick={handleBlog} />
                <Button children={'Для Лікарів'} className={'for-doctors'} onClick={handleForDoctors} />
            </section>
        </div>
    )
}

export default Header;