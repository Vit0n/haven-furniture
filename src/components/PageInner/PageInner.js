import React from 'react';

const PageInner = props => {
    return (
        <div
            style={{
                minHeight: '600px',
                width: '100%',
                backgroundImage: `url(${props.imgPath})`,
                backgroundPosition: '50% 50%',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                alignContent: 'center',
            }}
        >
            <div className="container">
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignContent: 'center',
                        textAlign: 'center',
                        color: 'white',
                    }}
                >
                    <h1
                        style={{
                            fontSize: '4.5rem',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            letterSpacing: '.3rem',
                        }}
                    >
                        {props.pageName}
                    </h1>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default PageInner;
