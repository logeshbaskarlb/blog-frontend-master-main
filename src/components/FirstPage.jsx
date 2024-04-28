import React from 'react';

const FirstPage = () => {
  return (
    <>
    <h1 style={{
        color: "black",
        textAlign: "center",
      
    }}>Welcome to blogify !</h1>
    <div style={{
        backgroundImage: 'url("https://msl-ltd.co.uk/wp-content/uploads/2016/10/shutterstock_451991974-1.jpg")',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundRepeat : 'no-repeat' ,
        flexWrap: 'wrap',
        maxWidth: "100%",
        minWidth: "100vw",
        minHeight: " 100vh",
        height:"auto"
       
    }}
    className='img'>
     
    </div>
    </>
  );
};

export default FirstPage;
