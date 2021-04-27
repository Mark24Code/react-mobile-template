import React from 'react';
import './error.scss';

export default function ErrorPage() {
  function reload() {
    window.location.reload();
  }
  return (
    <div className='error-page'>
      <div className='title'>连接超时</div>
      <div className='desc'>无法获取网络信息，请检查您的网络设置，稍后重试</div>
      <div className='retry' onClick={reload}>重试</div>
    </div>
  )
}