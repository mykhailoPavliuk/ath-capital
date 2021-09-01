import React from 'react';
import {Link} from 'react-router-dom';
import zIndex from "@material-ui/core/styles/zIndex";

function Main() {

    const styleZ = {
        position: 'relative',
        zIndex: 0
    }
    const style = {
        zIndex: -1,
        opacity: 0.35,
        width: '100vw',
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none',
    }
    return (
        <section className='main' style={styleZ}>

            <div className='main-header' >
                <h1 className='heading'>
                    ATH capital <br/>
                    Доход сегодня
                </h1>
                <p>Ваши деньги должны работать и мы вам в этом поможем</p>

                <a href='https://t.me/ath_sup' target='_blank' className='btn-primary'>
                    Записаться на консультацию
                </a>
            </div>


        </section>
    );
}

export default Main;
