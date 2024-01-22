import React from 'react'
import { Link } from 'react-router-dom'

const TalkDigitally = ({ children, data }) => {

    return (
        <>
            <div className="flex justify-center min-h-80 bg-sky-800">
                {children}
            </div>

            <div className="flex justify-center -mt-40">
                <div className="w-[70%] flex items-center gap-20">
                    {data.map((curElem, index) => (
                        <div key={index} className="w-1/2">
                            <img className='rounded h-80 w-full' src={`${require('../assets/static/' + curElem.imgurl)}`} alt="" />
                            <div className="py-8 flex flex-col gap-5">
                                <p className='text-6xl font-bold tracking-wider text-sky-700 font-serif'>{curElem.title}</p>
                                <p className='text-sm w-[80%] text-slate-500'>{curElem.desc}</p>
                            </div>
                            <Link to={curElem.btn_link}>
                                <p className='w-fit bg-sky-700 border-2  px-16 text-white duration-300 py-2 uppercase tracking-wider rounded-tl-full hover:rounded-bl-full hover:rounded-tr-full rounded-br-full hover:rounded-none text-sm'>{curElem.btn_title}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex py-10 gap-5 justify-center">
                <div className="w-[70%] flex gap-5">
                    <svg className='w-32' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4422.2 994.1"><linearGradient id="a" gradientTransform="matrix(1 0 0 -1 0 999.257)" gradientUnits="userSpaceOnUse" x1="392.523" x2="257.685" y1="733.467" y2="910.152"><stop offset=".001" stop-color="#0867df" /><stop offset=".454" stop-color="#0668e1" /><stop offset=".859" stop-color="#0064e0" /></linearGradient><linearGradient id="b" gradientTransform="matrix(1 0 0 -1 0 999.257)" gradientUnits="userSpaceOnUse" x1="130.022" x2="222.461" y1="847.923" y2="918.102"><stop offset=".132" stop-color="#0064df" /><stop offset=".999" stop-color="#0064e0" /></linearGradient><linearGradient id="c" gradientTransform="matrix(1 0 0 -1 0 999.257)" gradientUnits="userSpaceOnUse" x1="90.84" x2="127.921" y1="744.937" y2="838.281"><stop offset=".015" stop-color="#0072ec" /><stop offset=".688" stop-color="#0064df" /></linearGradient><linearGradient id="d" gradientTransform="matrix(1 0 0 -1 0 999.257)" gradientUnits="userSpaceOnUse" x1="85.805" x2="90.095" y1="677.504" y2="734.512"><stop offset=".073" stop-color="#007cf6" /><stop offset=".994" stop-color="#0072ec" /></linearGradient><linearGradient id="e" gradientTransform="matrix(1 0 0 -1 0 999.257)" gradientUnits="userSpaceOnUse" x1="88.174" x2="85.105" y1="646.539" y2="669.38"><stop offset=".073" stop-color="#007ff9" /><stop offset="1" stop-color="#007cf6" /></linearGradient><linearGradient id="f" gradientTransform="matrix(1 0 0 -1 0 999.257)" gradientUnits="userSpaceOnUse" x1="86.362" x2="105.489" y1="640.538" y2="599.971"><stop offset=".073" stop-color="#007ff9" /><stop offset="1" stop-color="#0082fb" /></linearGradient><linearGradient id="g" gradientTransform="matrix(1 0 0 -1 0 999.257)" gradientUnits="userSpaceOnUse" x1="380.335" x2="405.621" y1="836.826" y2="871.798"><stop offset=".28" stop-color="#007ff8" /><stop offset=".914" stop-color="#0082fb" /></linearGradient><linearGradient id="h" gradientTransform="matrix(1 0 0 -1 0 999.257)" gradientUnits="userSpaceOnUse" x1="572.586" x2="625.484" y1="882.151" y2="687.561"><stop offset="0" stop-color="#0082fb" /><stop offset="1" stop-color="#0081fa" /></linearGradient><linearGradient id="i" gradientTransform="matrix(1 0 0 -1 0 999.257)" gradientUnits="userSpaceOnUse" x1="638.255" x2="604.778" y1="680.117" y2="612.465"><stop offset=".062" stop-color="#0081fa" /><stop offset="1" stop-color="#0080f9" /></linearGradient><linearGradient id="j" gradientTransform="matrix(1 0 0 -1 0 999.257)" gradientUnits="userSpaceOnUse" x1="578.163" x2="609.457" y1="576.609" y2="597.923"><stop offset="0" stop-color="#027af3" /><stop offset="1" stop-color="#0080f9" /></linearGradient><linearGradient id="k" gradientTransform="matrix(1 0 0 -1 0 999.257)" gradientUnits="userSpaceOnUse" x1="529.091" x2="572.577" y1="572.432" y2="572.432"><stop offset="0" stop-color="#0377ef" /><stop offset=".999" stop-color="#0279f1" /></linearGradient><linearGradient id="l" gradientTransform="matrix(1 0 0 -1 0 999.257)" gradientUnits="userSpaceOnUse" x1="491.284" x2="522.547" y1="596.383" y2="577.99"><stop offset=".002" stop-color="#0471e9" /><stop offset="1" stop-color="#0377ef" /></linearGradient><linearGradient id="m" gradientTransform="matrix(1 0 0 -1 0 999.257)" gradientUnits="userSpaceOnUse" x1="395.918" x2="496.066" y1="732.008" y2="606.091"><stop offset=".277" stop-color="#0867df" /><stop offset="1" stop-color="#0471e9" /></linearGradient><path d="M-346.9-342.2h5116v1678.5h-5116z" fill="none" /><path d="M781.8 74.1H857l127.9 231.4 127.9-231.4h73.6v380.2H1125V162.9l-112.2 201.8h-57.6l-112-201.8v291.4h-61.4zM1384.4 461c-28.4 0-53.4-6.3-75-18.9-21.3-12.4-38.8-30.5-50.4-52.3-12-22.3-18.1-47.8-18.1-76.6 0-29.1 5.9-54.9 17.7-77.4 11.8-22.4 28.1-40 49-52.7s44.9-19 72.1-19c27 0 50.2 6.4 69.7 19.1 19.5 12.8 34.4 30.6 44.9 53.6s15.7 50 15.7 80.9v16.8h-208.3c3.8 23.2 13.2 41.4 28.1 54.7s33.8 20 56.6 20c18.3 0 34-2.7 47.3-8.1 13.2-5.4 25.6-13.7 37.2-24.7l32.6 39.9c-32.3 29.9-72.1 44.7-119.1 44.7zm44.8-225.5c-12.9-13.1-29.7-19.7-50.5-19.7-20.3 0-37.3 6.7-50.9 20.1-13.7 13.4-22.3 31.4-25.9 54h149.4c-1.9-23.1-9.3-41.3-22.1-54.4zm155.3-14.3H1528V171h56.5V87.9h59.2V171h85.8v50.2h-85.8v127.4c0 21.2 3.6 36.3 10.9 45.4 7.2 9.1 19.6 13.6 37.2 13.6 6.6.1 13.2-.3 19.8-.9 5.4-.6 11.4-1.5 17.9-2.6v49.7c-7.4 2.1-15 3.8-22.7 4.9-8.8 1.3-17.6 1.9-26.5 1.9-63.9 0-95.9-34.9-95.9-104.8zm453.5 233h-58.1v-39.6c-10 14.6-23.6 26.4-39.4 34.4-15.9 8-34 12.1-54.3 12.1-25 0-47.1-6.4-66.4-19.1-19.3-12.8-34.4-30.3-45.5-52.7-11-22.4-16.6-47.9-16.6-76.7 0-29 5.6-54.6 16.8-76.9s26.7-39.7 46.6-52.4c19.8-12.7 42.6-19 68.3-19 19.4 0 36.8 3.8 52.1 11.3 15.2 7.3 28.3 18.3 38.3 31.9V171h58.1zm-59.2-184.1c-6.3-16.1-16.3-28.8-30-38.2-13.7-9.3-29.5-14-47.4-14-25.3 0-45.5 8.5-60.6 25.5-15 17-22.5 40-22.5 69 0 29.1 7.2 52.2 21.7 69.2s34.1 25.5 58.9 25.5c18.3 0 34.6-4.7 48.9-14.1 14.1-9.1 24.9-22.4 31-38zm203.4-196h155.6c43.3 0 76 8.7 98.2 26.2s33.3 41.5 33.3 72.1c0 42-20.3 70.2-60.8 84.7 52.9 13.4 79.3 44.4 79.3 92.9 0 32.8-11.8 58.3-35.4 76.7s-57.5 27.6-101.7 27.6h-168.4V74.1zm148.3 162.6c50.5 0 75.8-18.4 75.8-55.1 0-18.3-5.9-31.7-17.8-40.2s-30.2-12.8-55-12.8h-89.9v108.1zm18.2 163c50.7 0 76-19 76-57 0-17.6-6-30.8-17.9-39.8s-32.6-13.4-61.9-13.4h-101.3v110.3zm432.6 54.5h-58.4v-40.7c-21.7 31.7-51.8 47.5-90.2 47.5-33.3 0-58.9-10.5-76.7-31.5s-26.8-51.1-26.7-90.2V171h59.2v161.3c0 26.3 4.6 45.7 13.8 58.2 9.2 12.6 23.7 18.9 43.4 18.9 17 0 32.1-4.5 45.4-13.4 13.2-9 23.5-21.5 31-37.6V171h59.2zm258.8-17.2c-21 16-49.2 24-84.5 24-29.9 0-55.9-5.2-78.1-15.7s-38.7-24.6-49.6-42.4l39.9-34.8c8.3 12.7 19.8 22.7 34.5 30.1s32.1 11.1 52.4 11.1c37.8 0 56.8-11 56.8-33.1 0-9.4-3.1-17-9.4-22.7-6.2-5.7-16.5-9.7-30.8-12.1l-54.6-9.5c-25.7-4.5-45.4-13.7-58.9-27.4-13.6-13.8-20.4-31.5-20.4-53.2 0-26.2 10.5-47.3 31.4-63.3 20.9-15.9 49.2-23.9 84.9-23.9 25.9 0 49.1 5.3 69.7 15.9 20.5 10.6 35.8 24.3 45.8 41.1l-41 31c-6.9-11.2-17.1-20.1-30.7-26.6s-29.3-9.8-47.3-9.8c-16.8 0-29.8 2.9-39 8.7-9.1 5.8-13.7 13.9-13.7 24.2 0 8.9 2.8 15.8 8.4 20.6 5.6 4.9 15 8.5 28.2 10.9l61.4 10.9c24.6 4.3 43.4 13.6 56.5 27.8 13 14.2 19.6 32.1 19.6 53.6 0 27.1-10.5 48.6-31.5 64.6zm85.3-313.9c-7.2-7.1-10.9-16.2-10.9-27.3 0-11.2 3.6-20.4 10.9-27.4 7.2-7.1 16.6-10.6 28-10.6s20.7 3.5 28 10.6c7.2 7.1 10.9 16.2 10.9 27.4 0 11-3.6 20.1-10.9 27.3-7.2 7.2-16.6 10.7-28 10.7-11.5 0-20.8-3.6-28-10.7zm-1.7 47.9h59.2v283.2h-59.2zm124.4 0h58.4v41.3c21.9-32 52.4-48.1 91.5-48.1 33.7 0 59.6 10.5 77.7 31.5s27.2 51.1 27.2 90.2v168.4h-59.2V292.9c0-26.4-4.7-45.9-14.1-58.4s-24.2-18.7-44.3-18.7c-17.6 0-33 4.5-46.4 13.6s-23.9 21.7-31.5 38v186.8h-59.2V171zm443.7 290c-28.4 0-53.4-6.3-75-18.9-21.3-12.4-38.8-30.5-50.4-52.3-12-22.3-18.1-47.8-18.1-76.6 0-29.1 5.9-54.9 17.6-77.4 11.8-22.4 28.1-40 49-52.7s44.9-19 72.1-19c27 0 50.2 6.4 69.7 19.1 19.5 12.8 34.4 30.6 44.9 53.6s15.7 50 15.7 80.9v16.8H3609c3.8 23.2 13.2 41.4 28.1 54.7s33.8 20 56.6 20c18.3 0 34-2.7 47.3-8.1 13.2-5.4 25.6-13.7 37.2-24.7l32.6 39.9c-32.2 29.9-71.9 44.7-119 44.7zm44.8-225.5c-12.9-13.1-29.7-19.7-50.5-19.7-20.3 0-37.3 6.7-50.9 20.1-13.7 13.4-22.3 31.4-25.9 54h149.4c-1.9-23.1-9.2-41.3-22.1-54.4zM4060.3 437c-21 16-49.2 24-84.5 24-29.9 0-55.9-5.2-78.1-15.7s-38.7-24.6-49.6-42.4l39.9-34.8c8.3 12.7 19.8 22.7 34.5 30.1s32.1 11.1 52.4 11.1c37.8 0 56.8-11 56.8-33.1 0-9.4-3.1-17-9.4-22.7-6.2-5.7-16.5-9.7-30.8-12.1L3937 332c-25.7-4.5-45.4-13.7-58.9-27.4-13.6-13.8-20.4-31.5-20.4-53.2 0-26.2 10.5-47.3 31.4-63.3 20.9-15.9 49.2-23.9 84.9-23.9 25.9 0 49.1 5.3 69.7 15.9 20.5 10.6 35.8 24.3 45.8 41.1l-41 31c-6.9-11.2-17.1-20.1-30.7-26.6s-29.3-9.8-47.3-9.8c-16.8 0-29.8 2.9-39 8.7-9.1 5.8-13.7 13.9-13.7 24.2 0 8.9 2.8 15.8 8.4 20.6 5.6 4.9 15 8.5 28.2 10.9l61.4 10.9c24.6 4.3 43.4 13.6 56.5 27.8 13 14.2 19.6 32.1 19.6 53.6-.1 27-10.6 48.5-31.6 64.5zm277.3 0c-21 16-49.2 24-84.5 24-29.9 0-55.9-5.2-78.1-15.7s-38.7-24.6-49.6-42.4l39.9-34.8c8.3 12.7 19.8 22.7 34.5 30.1s32.1 11.1 52.4 11.1c37.8 0 56.8-11 56.8-33.1 0-9.4-3.1-17-9.4-22.7-6.2-5.7-16.5-9.7-30.8-12.1l-54.6-9.5c-25.7-4.5-45.4-13.7-58.9-27.4-13.6-13.8-20.4-31.5-20.4-53.2 0-26.2 10.5-47.3 31.4-63.3 20.9-15.9 49.2-23.9 84.9-23.9 25.9 0 49.1 5.3 69.7 15.9 20.5 10.6 35.8 24.3 45.8 41.1l-41 31c-6.9-11.2-17.1-20.1-30.7-26.6s-29.3-9.8-47.3-9.8c-16.8 0-29.8 2.9-39 8.7-9.1 5.8-13.7 13.9-13.7 24.2 0 8.9 2.8 15.8 8.4 20.6 5.6 4.9 15 8.5 28.2 10.9L4293 291c24.6 4.3 43.4 13.6 56.5 27.8 13 14.2 19.6 32.1 19.6 53.6 0 27.1-10.5 48.6-31.5 64.6zM781.8 549.3H926c48.5 0 85.9 11 112.3 33 26.3 22 39.5 53.5 39.5 94.6 0 40.9-13.1 72.4-39.4 94.5s-63.7 33.1-112.4 33.1h-82v124.9h-62.2zm139 199.3c31.9 0 55.4-5.9 70.6-17.7s22.8-29.7 22.8-53.8c0-24.8-7.6-43-22.9-54.6s-38.8-17.4-70.5-17.4H844v143.4zm458.7 180.9h-58.1v-39.6c-10 14.6-23.6 26.4-39.4 34.4-15.9 8-34 12.1-54.3 12.1-25 0-47.1-6.4-66.4-19.1-19.3-12.8-34.4-30.3-45.5-52.7-11-22.4-16.6-47.9-16.6-76.7 0-29 5.6-54.6 16.8-76.9s26.7-39.7 46.6-52.4c19.8-12.7 42.6-19 68.3-19 19.4 0 36.8 3.8 52.1 11.3 15.2 7.3 28.3 18.3 38.3 31.9v-36.4h58.1zm-59.2-184.1c-6.3-16.1-16.3-28.8-30-38.2-13.7-9.3-29.5-14-47.4-14-25.3 0-45.5 8.5-60.6 25.5-15 17-22.5 40-22.5 69 0 29.1 7.2 52.2 21.7 69.2s34.1 25.5 58.9 25.5c18.3 0 34.6-4.7 48.9-14.1 14.1-9.1 24.9-22.4 31-38zm118.9-99.1h58.4v42.4c16.8-31 40.4-46.4 70.6-46.4 5.8 0 11.6.4 17.4 1.4v54.9c-6-.5-12-.8-18.2-.8-34.4 0-57.4 16.7-69 50v181.9h-59.2zm220 50.2h-40.5v-50.2h40.5v-83.1h59.2v83.1h85.8v50.2h-85.8v127.4c0 21.2 3.6 36.3 10.9 45.4 7.2 9.1 19.6 13.6 37.2 13.6 6.6.1 13.2-.3 19.8-.9 5.4-.6 11.4-1.5 17.9-2.6V929c-7.4 2.1-15 3.8-22.7 4.9-8.8 1.3-17.6 1.9-26.5 1.9-63.9 0-95.9-34.9-95.9-104.8zm192.8-50.2h58.4v41.3c21.9-32 52.4-48.1 91.5-48.1 33.7 0 59.6 10.5 77.7 31.5s27.2 51.1 27.2 90.2v168.4h-59.2V768.2c0-26.4-4.7-45.9-14.1-58.4s-24.2-18.7-44.3-18.7c-17.6 0-33 4.5-46.4 13.6s-23.9 21.7-31.5 38v186.8H1852zm443.7 290c-28.4 0-53.4-6.3-75-18.9-21.3-12.4-38.8-30.5-50.4-52.3-12-22.3-18.1-47.8-18.1-76.6 0-29.1 5.9-54.9 17.6-77.4 11.8-22.4 28.1-40 49-52.7s44.9-19 72.1-19c27 0 50.2 6.4 69.7 19.1 19.5 12.8 34.4 30.6 44.9 53.6s15.7 50 15.7 80.9v17h-208.3c3.8 23.2 13.2 41.4 28.1 54.7s33.8 20 56.6 20c18.3 0 34-2.7 47.3-8.1 13.2-5.4 25.6-13.7 37.2-24.7l32.6 39.9c-32.2 29.7-71.9 44.5-119 44.5zm44.8-225.5c-12.9-13.1-29.7-19.7-50.5-19.7-20.3 0-37.3 6.7-50.9 20.1-13.7 13.4-22.3 31.4-25.9 54h149.4c-1.9-23.2-9.2-41.3-22.1-54.4zm130.9-64.5h58.4v43.5c18.3-31.7 43.3-47.5 75-47.5 10.3 0 18.7.9 25.3 2.7v54.6c-8.9-1.3-17.9-1.9-26.9-1.9-35.5 0-59.7 15.9-72.5 47.8v184.1h-59.2zm387.3 266c-21 16-49.2 24-84.5 24-29.9 0-55.9-5.2-78.1-15.7s-38.7-24.6-49.6-42.4l39.9-34.8c8.3 12.7 19.8 22.7 34.5 30.1s32.1 11.1 52.4 11.1c37.8 0 56.8-11 56.8-33.1 0-9.4-3.1-17-9.4-22.7-6.2-5.7-16.5-9.7-30.8-12.1l-54.6-9.5c-25.7-4.5-45.4-13.7-58.9-27.4-13.6-13.8-20.4-31.5-20.4-53.2 0-26.2 10.5-47.3 31.4-63.3 20.9-15.9 49.2-23.9 84.9-23.9 25.9 0 49.1 5.3 69.7 15.9 20.5 10.6 35.8 24.3 45.8 41.1l-41 31c-6.9-11.2-17.1-20.1-30.7-26.6s-29.3-9.8-47.3-9.8c-16.8 0-29.8 2.9-39 8.7-9.1 5.8-13.7 13.9-13.7 24.2 0 8.9 2.8 15.8 8.4 20.6 5.6 4.9 15 8.5 28.2 10.9l61.4 10.9c24.6 4.3 43.4 13.6 56.5 27.8 13 14.2 19.6 32.1 19.6 53.6 0 27-10.5 48.5-31.5 64.6z" fill="#1c2b33" /><path d="M226.1 61.1h-.6l-.8 65.4h.5c43 0 76.4 33.9 149 156.1l4.4 7.4.3.5 40.6-60.9-.3-.5c-9.6-15.5-18.7-29.8-27.5-42.9-10.2-15.1-20-28.6-29.5-40.7-48-61.1-88.1-84.4-136.1-84.4z" fill="url(#a)" /><path d="M225.5 61.1c-48.3.2-90.9 31.5-121.8 79.2-.1.1-.2.3-.3.4l56.6 30.8c.1-.1.2-.3.3-.4 18-27.1 40.4-44.4 64.4-44.6h.5l.8-65.4h-.5z" fill="url(#b)" /><path d="M103.7 140.3c-.1.1-.2.3-.3.4-20.2 31.6-35.3 70.3-43.4 112 0 .2-.1.4-.1.5l63.5 15c0-.2.1-.4.1-.5 6.8-36.7 19.7-70.7 36.5-96.1.1-.1.2-.3.3-.4z" fill="url(#c)" /><path d="M123.5 267.7l-63.5-15c0 .2-.1.4-.1.5-4.4 22.9-6.7 46.3-6.8 69.6v.6l65.2 5.8v-4.7c0-18.9 1.8-37.8 5.2-56.4-.1-.1 0-.2 0-.4z" fill="url(#d)" /><path d="M120.2 349.6c-1.2-6.7-1.8-13.5-2-20.3v-.6l-65.1-5.8v.6c-.1 13.7 1.1 27.3 3.6 40.8 0 .2.1.4.1.5l63.6-14.6c-.1-.2-.1-.4-.2-.6z" fill="url(#e)" /><path d="M135.1 383.3c-7.1-7.7-12.1-18.9-14.7-33.2 0-.2-.1-.4-.1-.5l-63.6 14.6c0 .2.1.4.1.5C61.6 390 71 411 84.5 426.9c.1.1.2.3.4.4l50.6-43.6c-.2-.1-.3-.2-.4-.4z" fill="url(#f)" /><path d="M323.4 202.5c-38.3 58.8-61.5 95.6-61.5 95.6-51 80-68.7 97.9-97.1 97.9-11.9 0-21.8-4.2-29.3-12.3l-.4-.4-50.6 43.6c.1.1.2.3.4.4 18.6 21.7 44.9 33.8 77.5 33.8 49.2 0 84.6-23.2 147.6-133.2 0 0 26.2-46.3 44.3-78.3-11.3-18-21.4-33.7-30.9-47.1z" fill="#0082fb" /><path d="M391.7 109.7l-.4.4c-10.4 11.2-20.1 23-29.1 35.4 9.5 12.1 19.3 25.6 29.5 40.7 12-18.6 23.3-33.6 34.3-45.2l.4-.4z" fill="url(#g)" /><path d="M577.7 104c-26.7-27-58.6-42.8-92.6-42.8-35.9 0-66.1 19.7-93.4 48.6l-.4.4 34.7 31 .4-.4c17.9-18.7 35.3-28 54.6-28 20.7 0 40.1 9.8 56.9 26.9l.4.4 39.8-35.6c-.1-.3-.2-.4-.4-.5z" fill="#0082fb" /><path d="M655 314.3c-1.5-86.7-31.8-164.1-76.8-209.9l-.4-.4-39.8 35.6.4.4c33.9 34.8 57.1 99.5 59.2 174.3v.6h57.5c-.1-.3-.1-.4-.1-.6z" fill="url(#h)" /><path d="M655 314.8v-.6h-57.5v.6c.1 3.5.1 7 .1 10.6 0 20.4-3 36.9-9.2 48.8-.1.2-.2.4-.3.5l42.9 44.6c.1-.2.2-.3.3-.5 15.6-24 23.7-57.4 23.7-97.8v-6.2z" fill="url(#i)" /><path d="M588.4 374.2c-.1.2-.2.4-.3.5-5.4 10-13 16.7-23 19.6l19.5 61.6c2.6-.9 5.1-1.9 7.6-3 .7-.3 1.5-.7 2.2-1l1.2-.6c13-6.6 24.2-16.2 32.7-28.2.5-.7 1.1-1.5 1.6-2.3.4-.5.7-1.1 1.1-1.6.1-.2.2-.3.3-.5z" fill="url(#j)" /><path d="M552.7 396c-6.2.1-12.3-1-18-3.5l-20 63c11.2 3.8 23.2 5.6 36.6 5.6 11.5.1 23-1.7 33.9-5.4l-19.5-61.5c-4.3 1.2-8.6 1.9-13 1.8z" fill="url(#k)" /><path d="M512.6 374.5c-.1-.1-.2-.3-.4-.4l-46 47.9.4.4c16 17 31.3 27.6 48.6 33.4l20-63c-7.3-3.2-14.3-8.9-22.6-18.3z" fill="url(#l)" /><path d="M512.3 374c-13.8-16.1-30.9-42.8-57.8-86l-35-58.4-.3-.5-40.6 60.9.3.5 24.8 41.7c24 40.2 43.6 69.3 62.5 89.6l.4.4 46-47.9c-.1 0-.2-.1-.3-.3z" fill="url(#m)" />
                    </svg>
                    <svg className='w-32' xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 200 68.65"><path class="cls-1" d="M0 0h200v68.56H0z" /><path class="cls-2" d="M0 .09h18.19v68.56H0z" /><path d="M36.16 59.47H32.6V31.79H42a8.73 8.73 0 016.09 2.34 8 8 0 010 11.79A8.73 8.73 0 0142 48.26h-5.84zm0-14.61h6a4.63 4.63 0 003.6-1.51 4.77 4.77 0 000-6.65 4.59 4.59 0 00-3.6-1.51h-6zM59 60.09a7.46 7.46 0 01-5-1.74 5.78 5.78 0 01-2-4.6 5.7 5.7 0 012.4-4.86 9.72 9.72 0 015.91-1.75 10.11 10.11 0 015.14 1.16v-.55A4.21 4.21 0 0064 44.41a5.11 5.11 0 00-3.51-1.26 5.46 5.46 0 00-2.81.74 3.82 3.82 0 00-1.72 2l-3.24-1.39a7.23 7.23 0 012.59-3.15 8.23 8.23 0 015.1-1.45 8.79 8.79 0 016 2.12 7.62 7.62 0 012.39 6v11.45h-3.4v-2.63h-.15A7 7 0 0159 60.09zm.58-3.25a5.79 5.79 0 004-1.64 5.1 5.1 0 001.8-3.89 7 7 0 00-4.52-1.24A5.89 5.89 0 0057 51.19a3.37 3.37 0 00-1.32 2.63A2.54 2.54 0 0056.84 56a4.78 4.78 0 002.74.84zm16.63-16.31v3.09h.15a4.9 4.9 0 012.3-2.62 7.4 7.4 0 013.69-.95 12.19 12.19 0 011.28.08v3.48a14.18 14.18 0 00-1.43-.08A6 6 0 0078 45a5.24 5.24 0 00-1.64 4.08v10.39H72.8V40.53zm19.48 19.25a5.51 5.51 0 01-6.11-6.07v-9.94h-3.32v-3.24h3.32v-5.8h3.56v5.8h4.64v3.24h-4.64v9.67q0 3.09 2.55 3.09a3.75 3.75 0 001.62-.31l1.24 3.05a7.1 7.1 0 01-2.86.51zm9.08-19.25v2.62h.15a6.4 6.4 0 012.44-2.3 7.07 7.07 0 013.56-.94 6.7 6.7 0 015.37 2.16 8.59 8.59 0 011.85 5.8v11.6h-3.55V48.41c0-3.5-1.56-5.26-4.68-5.26a4.36 4.36 0 00-3.59 1.76 6.39 6.39 0 00-1.4 4.08v10.48h-3.55V40.53zm26.13 19.56a9.14 9.14 0 01-7-2.87 10.11 10.11 0 01-2.66-7.22 10.45 10.45 0 012.61-7.12 8.47 8.47 0 016.66-3 8.74 8.74 0 016.75 2.74 10.4 10.4 0 012.53 7.38v.65h-15a6.45 6.45 0 001.92 4.53 5.82 5.82 0 004.11 1.66 5.1 5.1 0 005.18-3.25l3.17 1.32a8.56 8.56 0 01-3 3.69 8.9 8.9 0 01-5.27 1.49zm5.1-12.37a5 5 0 00-1.48-3.1 5.33 5.33 0 00-4.08-1.47 5.1 5.1 0 00-3.44 1.24 6.29 6.29 0 00-2 3.33zm10.59 11.75H143V40.53h3.4v3.09h.15a4.91 4.91 0 012.23-2.55 6.37 6.37 0 013.26-1 6.75 6.75 0 012.67.47l-1.35 3.32a5.43 5.43 0 00-1.9-.27 4.65 4.65 0 00-3.42 1.53 5.5 5.5 0 00-1.49 4z" fill="#757575" /><path class="cls-4" d="M40.7 25.45A8.61 8.61 0 0132.09 17a8.61 8.61 0 018.61-8.53 8.1 8.1 0 015.82 2.34l-1.63 1.64a5.94 5.94 0 00-4.19-1.66 6.18 6.18 0 000 12.35 5.72 5.72 0 004.3-1.7 4.92 4.92 0 001.27-2.92h-5.59v-2.38h7.83a8.41 8.41 0 01.13 1.51 7.66 7.66 0 01-2 5.42 7.75 7.75 0 01-5.94 2.38z" /><path class="cls-2" d="M61 20a5.49 5.49 0 11-5.49-5.47A5.4 5.4 0 0161 20zm-2.4 0a3.1 3.1 0 10-6.18 0 3.1 3.1 0 106.18 0z" /><path d="M73.45 20A5.49 5.49 0 1168 14.52 5.39 5.39 0 0173.45 20zm-2.4 0a3.09 3.09 0 10-6.17 0 3.09 3.09 0 106.17 0z" fill="#fbbc05" /><path class="cls-4" d="M85.32 14.85v9.82c0 4-2.38 5.69-5.19 5.69a5.22 5.22 0 01-4.85-3.23l2.09-.87a3 3 0 002.76 1.95c1.8 0 2.92-1.12 2.92-3.21v-.79H83a3.72 3.72 0 01-2.88 1.24 5.47 5.47 0 010-10.93A3.77 3.77 0 0183 15.74h.09v-.89zM83.21 20a3.08 3.08 0 00-2.92-3.34 3.17 3.17 0 00-3 3.34 3.14 3.14 0 003 3.29A3.05 3.05 0 0083.21 20z" /><path d="M90.05 9.05v16.07h-2.4V9.05z" fill="#34a853" /><path class="cls-2" d="M99.84 21.79L101.7 23a5.44 5.44 0 01-4.56 2.42A5.35 5.35 0 0191.72 20a5.2 5.2 0 015.15-5.47 5.07 5.07 0 014.68 3.47l.25.62-7.31 3a2.78 2.78 0 002.65 1.66 3.14 3.14 0 002.7-1.49zm-5.74-2l4.89-2a2.13 2.13 0 00-2-1.16 3 3 0 00-2.89 3.19z" /><path class="cls-1" d="M12.55 57.58v.89H5.64v-2.36a2.19 2.19 0 01.58-1.52A1.9 1.9 0 017.69 54a1.9 1.9 0 011.48.64 2.19 2.19 0 01.58 1.52v1.47zm-3.65 0v-1.49a1.16 1.16 0 00-.37-.9 1.26 1.26 0 00-.84-.33 1.23 1.23 0 00-.83.33 1.16 1.16 0 00-.37.9v1.49zm3.65-6.49H5.64v-2.36a2.17 2.17 0 01.58-1.52 1.9 1.9 0 011.47-.64A1.88 1.88 0 019 47a2.07 2.07 0 01.71 1.18l2.82-2v1.06l-2.8 1.86v1h2.8zm-3.63-.89v-1.43a1.25 1.25 0 00-.35-.91 1.12 1.12 0 00-.88-.39 1.25 1.25 0 00-.83.34 1.16 1.16 0 00-.37.9v1.49zM6.49 39.53v3.15h2.19v-2.84h.83v2.84h2.19v-3.15h.85v4H5.64v-4zm6.06-3.13H5.64v-.89l4.21-2.41-4.21-2.44v-.89h6.91v.89H7.29l3.8 2.16v.53l-3.8 2.16h5.26zm0-9.95H5.64v-.89h6.91zm-6.06-8.26v3.15h2.19V18.5h.83v2.84h2.19v-3.15h.85v4H5.64v-4zm6.06-3.13H5.64V12.7a2.19 2.19 0 01.58-1.52 1.9 1.9 0 011.47-.64A1.93 1.93 0 019 11a2.11 2.11 0 01.71 1.18l2.82-1.94v1.05l-2.8 1.87v1h2.8zm-3.63-.89v-1.43a1.27 1.27 0 00-.35-.91 1.11 1.11 0 00-.88-.38 1.2 1.2 0 00-.83.34 1.13 1.13 0 00-.37.89v1.49z" /></svg>
                    <svg className='w-32' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 682.4 233.86"><path d="M635.57 112.69l45.06-67.07a6 6 0 00-4.25-10.24H124a6 6 0 00-6 6v151.1a6 6 0 006 6h552.38a6 6 0 004.25-10.24l-45.06-67.07a6 6 0 010-8.48z" fill="#33475b" /><g fill="#fff"><path d="M290.79 71.92v17.66h-16.21V71.92h-7.7v42.15h7.7V96.99h16.21v17.08h7.7V71.92zm32.34 28.53a6.37 6.37 0 01-12.74 0V82.39h-7.3v18.06a13.66 13.66 0 0027.31 0V82.39h-7.27zm54.1-16.2c0-3.7 2.45-4.87 5.13-4.87 2.16 0 5 1.65 6.88 3.64l4.76-5.63a15.06 15.06 0 00-11.19-5.47c-7.92 0-13.65 4.64-13.65 12.33 0 14.27 17.44 9.75 17.44 17.73 0 2.46-2.39 4.64-5.13 4.64-4.32 0-5.72-2.11-7.7-4.34l-5.31 5.51c3.4 4.17 7.58 6.29 12.6 6.29 7.52 0 13.58-4.7 13.58-12 0-15.84-17.44-10.92-17.44-17.79m107.92 23.05c-4.31 0-5.54-1.87-5.54-4.73V90h6.71v-6.46h-6.71v-8.46l-7.4 3.33v25.77c0 6.6 4.55 9.92 10.78 9.92a15 15 0 002.92-.23l1.81-6.65c-.81 0-1.75.11-2.57.11m-134.2-24.72a11.18 11.18 0 00-8.58 3.44V72.18H335v25.71c0 9.62 7 16.22 14.77 16.22 8.68 0 16.31-6.71 16.31-15.75a15.48 15.48 0 00-15.19-15.75m-.05 24.14a8.3 8.3 0 118.3-8.3 8.3 8.3 0 01-8.3 8.3M430.33 98c0-9.06-7.62-15.75-16.31-15.75-7.81 0-14.77 6.59-14.77 16.22v25.72h7.31v-13.91a11.22 11.22 0 008.58 3.45A15.48 15.48 0 00430.33 98m-6.92-.1a8.3 8.3 0 11-8.3-8.29 8.3 8.3 0 018.3 8.29" /><path d="M453.88 82.11v-7.27a5.59 5.59 0 003.23-5v-.17a5.61 5.61 0 00-5.59-5.67h-.17a5.6 5.6 0 00-5.59 5.59v.17a5.6 5.6 0 003.22 5v7.27a15.86 15.86 0 00-7.54 3.32l-20-15.54a6 6 0 00.23-1.57 6.31 6.31 0 10-6.32 6.3 6.21 6.21 0 003.12-.84l19.63 15.28a15.9 15.9 0 00.25 17.94l-6 6a5.27 5.27 0 00-1.48-.24 5.19 5.19 0 105.19 5.19 5.34 5.34 0 00-.24-1.49l5.91-5.91a15.93 15.93 0 1012.1-28.41M451.44 106a8.18 8.18 0 118.17-8.18 8.18 8.18 0 01-8.17 8.18m-175.78 45.47a3.3 3.3 0 00-1.13-.87 3.44 3.44 0 00-1.47-.35 3.72 3.72 0 00-.88.11 3 3 0 00-.8.34 2 2 0 00-.59.6 1.71 1.71 0 00-.23.89 1.51 1.51 0 00.2.82 1.69 1.69 0 00.55.58 3.54 3.54 0 00.85.42c.33.12.7.24 1.1.36l1.41.5a6 6 0 011.34.74 3.87 3.87 0 011 1.16 3.55 3.55 0 01.39 1.74 4.42 4.42 0 01-.42 2 4.12 4.12 0 01-1.12 1.41 4.55 4.55 0 01-1.64.84 6.82 6.82 0 01-2 .28 7.43 7.43 0 01-2.7-.51 5.18 5.18 0 01-2.16-1.51l1.8-1.68a3.57 3.57 0 001.39 1.14 3.91 3.91 0 001.71.42 3.57 3.57 0 00.9-.11 2.3 2.3 0 00.83-.37 2.07 2.07 0 00.6-.65 1.91 1.91 0 00.23-1 1.62 1.62 0 00-.26-.93 2.55 2.55 0 00-.7-.64 5.31 5.31 0 00-1-.47l-1.26-.42a10.45 10.45 0 01-1.28-.48 4 4 0 01-1.15-.74 3.42 3.42 0 01-.83-1.13 3.74 3.74 0 01-.32-1.67 3.66 3.66 0 01.45-1.86 3.94 3.94 0 011.18-1.29 5.26 5.26 0 011.66-.76 7.54 7.54 0 011.89-.25 6.82 6.82 0 012.19.38 5.58 5.58 0 011.93 1.14zm4.78 4.08a8 8 0 01.57-3.07 6.68 6.68 0 011.58-2.33 7 7 0 012.4-1.48 8.68 8.68 0 013-.52 8.93 8.93 0 013.06.52 7.17 7.17 0 012.42 1.48 6.7 6.7 0 011.59 2.33 8 8 0 01.57 3.07 7.79 7.79 0 01-.57 3 6.92 6.92 0 01-1.59 2.36 7.15 7.15 0 01-2.42 1.54 8.28 8.28 0 01-3.05.55 8 8 0 01-3-.55 7 7 0 01-2.4-1.54 6.9 6.9 0 01-1.58-2.36 7.79 7.79 0 01-.58-3zm2.74 0a5.84 5.84 0 00.35 2.09 4.6 4.6 0 001 1.65 4.45 4.45 0 001.54 1.09 4.84 4.84 0 002 .39 4.93 4.93 0 002-.39 4.59 4.59 0 001.55-1.09 4.9 4.9 0 001-1.65 6.07 6.07 0 00.35-2.09 5.91 5.91 0 00-.35-2 5.32 5.32 0 00-1-1.64 4.76 4.76 0 00-1.54-1.1 5 5 0 00-2-.4 4.88 4.88 0 00-2 .4 4.61 4.61 0 00-1.53 1.1 5 5 0 00-1 1.64 5.68 5.68 0 00-.37 2zm16.12-7.04h2.52v11.92h6v2.24h-8.52zm22.22 8.96a5.84 5.84 0 01-.44 2.31 5.12 5.12 0 01-3 2.86 6.43 6.43 0 01-2.26.39 6.35 6.35 0 01-2.26-.39 5.29 5.29 0 01-1.81-1.11 4.8 4.8 0 01-1.2-1.75 5.84 5.84 0 01-.43-2.31v-9h2.52v8.86a4.61 4.61 0 00.16 1.23 2.84 2.84 0 00.53 1.09 2.65 2.65 0 001 .78 4 4 0 003 0 2.83 2.83 0 001-.78 3.16 3.16 0 00.53-1.09 5.06 5.06 0 00.16-1.23v-8.86h2.52zm7.06-6.76h-4.34v-2.2h11.2v2.2h-4.34v12h-2.52zm9.7-2.2h2.52v14.16h-2.52zm6.16 7.04a8 8 0 01.57-3.07 6.68 6.68 0 011.58-2.33 7 7 0 012.4-1.48 8.68 8.68 0 013-.52 8.93 8.93 0 013.06.52 7.17 7.17 0 012.42 1.48 6.7 6.7 0 011.59 2.33 8 8 0 01.57 3.07 7.79 7.79 0 01-.57 3 6.92 6.92 0 01-1.59 2.36 7.15 7.15 0 01-2.42 1.54 8.28 8.28 0 01-3.05.55 8 8 0 01-3-.55 7 7 0 01-2.4-1.54 6.9 6.9 0 01-1.58-2.36 7.79 7.79 0 01-.58-3zm2.74 0a5.84 5.84 0 00.35 2.09 4.6 4.6 0 001 1.65 4.45 4.45 0 001.54 1.09 4.84 4.84 0 002 .39 4.93 4.93 0 002-.39 4.59 4.59 0 001.55-1.09 4.9 4.9 0 001-1.65 6.07 6.07 0 00.35-2.09 5.91 5.91 0 00-.35-2 5.32 5.32 0 00-1-1.64 4.76 4.76 0 00-1.54-1.1 5 5 0 00-2-.4 4.88 4.88 0 00-2 .4 4.61 4.61 0 00-1.53 1.1 5 5 0 00-1 1.64 5.68 5.68 0 00-.37 2zm16.12-7.04h3.34l6.58 10.6v-10.6h2.52v14.16h-3.2l-6.72-10.94v10.94h-2.52zm24.02 2.96a3.3 3.3 0 00-1.13-.87 3.44 3.44 0 00-1.47-.35 3.72 3.72 0 00-.88.11 2.88 2.88 0 00-.8.34 2 2 0 00-.59.6 1.62 1.62 0 00-.23.89 1.51 1.51 0 00.2.82 1.69 1.69 0 00.55.58 3.54 3.54 0 00.85.42c.33.12.7.24 1.1.36l1.41.5a6 6 0 011.34.74 3.87 3.87 0 011 1.16 3.55 3.55 0 01.38 1.74 4.42 4.42 0 01-.41 2 4.12 4.12 0 01-1.12 1.41 4.64 4.64 0 01-1.64.84 6.82 6.82 0 01-2 .28 7.43 7.43 0 01-2.7-.51A5.18 5.18 0 01379 161l1.8-1.68a3.57 3.57 0 001.39 1.14 3.88 3.88 0 001.71.42 3.57 3.57 0 00.9-.11 2.3 2.3 0 00.83-.37 2.2 2.2 0 00.6-.65 1.91 1.91 0 00.23-1 1.62 1.62 0 00-.26-.93 2.55 2.55 0 00-.7-.64 5.59 5.59 0 00-1-.47l-1.26-.42a10.45 10.45 0 01-1.28-.48 4.16 4.16 0 01-1.16-.74 3.54 3.54 0 01-.8-1.07 3.74 3.74 0 01-.32-1.67 3.56 3.56 0 01.45-1.86 3.94 3.94 0 011.18-1.29 5.26 5.26 0 011.66-.76 7.54 7.54 0 011.89-.25 6.87 6.87 0 012.19.38 5.58 5.58 0 011.93 1.14zm11.68-2.96h4.63a10.57 10.57 0 012.2.22 4.62 4.62 0 011.67.72 3.34 3.34 0 011.08 1.28 4.18 4.18 0 01.38 1.88 4.09 4.09 0 01-.43 2 3.55 3.55 0 01-1.2 1.29 5 5 0 01-1.75.71 9.58 9.58 0 01-2.12.22h-1.96v5.86H399zm4.29 6.18a7.31 7.31 0 001.17-.09 3 3 0 001-.32 1.8 1.8 0 00.71-.63 1.88 1.88 0 00.26-1 1.82 1.82 0 00-.26-1 1.93 1.93 0 00-.69-.61 3.3 3.3 0 00-1-.29 10.55 10.55 0 00-1.13-.07h-1.85v4.06zm12.33-6.18h2.18l6.1 14.16H421l-1.32-3.24h-6.14l-1.28 3.24h-2.82zm3.2 8.76l-2.18-5.76-2.22 5.76zm7.68-8.76h4.92a8.94 8.94 0 011.94.21 5.08 5.08 0 011.67.69 3.73 3.73 0 011.17 1.26 3.87 3.87 0 01.44 1.9 3.6 3.6 0 01-.87 2.51 4.32 4.32 0 01-2.37 1.31l3.78 6.28h-3l-3.28-6H429v6h-2.5zm4.58 6.1a6.54 6.54 0 001.08-.08 3 3 0 001-.3 1.77 1.77 0 001-1.68 1.66 1.66 0 00-.26-1 2.19 2.19 0 00-.66-.59 3.14 3.14 0 00-.91-.3 6.83 6.83 0 00-1-.08H429v4zm11.81-3.9h-4.34v-2.2h11.21v2.2h-4.34v12h-2.53zm9.71-2.2h3.34l6.58 10.6v-10.6h2.53v14.16h-3.2l-6.72-10.94v10.94h-2.53zm16.79 0h9.39v2.2h-6.86v3.6h6.5v2.12h-6.5v4h7.22v2.24h-9.75zm13.4 0h4.93a8.78 8.78 0 011.93.21 4.9 4.9 0 011.67.69 3.54 3.54 0 011.17 1.26 3.76 3.76 0 01.44 1.9 3.6 3.6 0 01-.87 2.51 4.32 4.32 0 01-2.37 1.31l3.78 6.28h-3l-3.28-6h-1.84v6h-2.52zm4.58 6.1a6.46 6.46 0 001.08-.08 3 3 0 001-.3 1.74 1.74 0 001-1.68 1.59 1.59 0 00-.26-1 2 2 0 00-.66-.59 3 3 0 00-.91-.3 6.8 6.8 0 00-1-.08h-2.29v4zm15.4-6.1h4.62a10.43 10.43 0 012.2.22 4.6 4.6 0 011.68.72 3.34 3.34 0 011.08 1.28 4.18 4.18 0 01.38 1.88 4 4 0 01-.44 2 3.44 3.44 0 01-1.19 1.29 5 5 0 01-1.75.71 9.58 9.58 0 01-2.12.22h-1.94v5.86h-2.52zm4.28 6.18a7.34 7.34 0 001.18-.09 3 3 0 001-.32 1.71 1.71 0 00.7-.63 1.8 1.8 0 00.26-1 1.74 1.74 0 00-.26-1 1.78 1.78 0 00-.69-.61 3.13 3.13 0 00-1-.29 10.23 10.23 0 00-1.13-.07h-1.84v4.06zm9.12-6.18h4.92a8.81 8.81 0 011.94.21 4.9 4.9 0 011.67.69 3.54 3.54 0 011.17 1.26 3.76 3.76 0 01.44 1.9 3.6 3.6 0 01-.87 2.51 4.32 4.32 0 01-2.37 1.31l3.78 6.28h-3l-3.28-6h-1.84v6h-2.52zm4.58 6.1a6.54 6.54 0 001.08-.08 2.9 2.9 0 001-.3 1.72 1.72 0 00.71-.63 1.78 1.78 0 00.28-1 1.59 1.59 0 00-.26-1 2 2 0 00-.66-.59 3 3 0 00-.91-.3 6.83 6.83 0 00-1-.08h-2.28v4zm8.52.94a8 8 0 01.57-3.07 6.82 6.82 0 011.58-2.33 7.18 7.18 0 012.4-1.48 8.76 8.76 0 013-.52 8.85 8.85 0 013.06.52 7.07 7.07 0 012.42 1.48 6.7 6.7 0 011.59 2.33 8 8 0 01.57 3.07 7.79 7.79 0 01-.57 3 6.92 6.92 0 01-1.59 2.36 7.06 7.06 0 01-2.42 1.54 8.2 8.2 0 01-3.06.55 8.12 8.12 0 01-3-.55 7.16 7.16 0 01-2.4-1.54 7 7 0 01-1.58-2.36 7.79 7.79 0 01-.57-3zm2.74 0a6.07 6.07 0 00.35 2.09 4.9 4.9 0 001 1.65 4.65 4.65 0 001.54 1.09 5.2 5.2 0 004 0 4.49 4.49 0 001.55-1.09 4.6 4.6 0 001-1.65 5.84 5.84 0 00.35-2.09 5.68 5.68 0 00-.35-2 5 5 0 00-1-1.64 4.65 4.65 0 00-1.54-1.1 5.18 5.18 0 00-4 0 4.83 4.83 0 00-1.53 1.1 5.32 5.32 0 00-1 1.64 5.91 5.91 0 00-.38 2zm28.52 6.38a10.66 10.66 0 01-2.37.81 13.23 13.23 0 01-3 .29 8.59 8.59 0 01-3.14-.55 7.14 7.14 0 01-2.44-1.54 6.92 6.92 0 01-1.59-2.36 8.31 8.31 0 010-6.1 7.06 7.06 0 011.62-2.33 7.31 7.31 0 012.43-1.48 8.86 8.86 0 013-.52 9.57 9.57 0 013.11.49 6.41 6.41 0 012.27 1.29l-1.74 1.88a4.26 4.26 0 00-1.51-1 5.23 5.23 0 00-2.11-.42 5.14 5.14 0 00-2 .4 4.8 4.8 0 00-1.55 1.1 5.32 5.32 0 00-1 1.64 5.91 5.91 0 00-.35 2 6.07 6.07 0 00.35 2.09 4.9 4.9 0 001 1.65 4.52 4.52 0 001.58 1.09 5.44 5.44 0 002.11.39 7.18 7.18 0 002.82-.5v-3.6h-3v-2.08h5.42zm4.26-13.42h4.93a8.78 8.78 0 011.93.21 4.9 4.9 0 011.67.69 3.54 3.54 0 011.17 1.26 3.76 3.76 0 01.44 1.9 3.6 3.6 0 01-.87 2.51 4.32 4.32 0 01-2.37 1.31l3.78 6.28h-3l-3.28-6h-1.84v6h-2.52zm4.58 6.1a6.46 6.46 0 001.08-.08 3 3 0 001-.3 1.74 1.74 0 001-1.68 1.59 1.59 0 00-.26-1 2 2 0 00-.66-.59 3 3 0 00-.91-.3 6.8 6.8 0 00-1-.08h-2.29v4zm13.63-6.1h2.18l6.1 14.16h-2.88l-1.32-3.24H581l-1.28 3.24h-2.82zm3.2 8.76l-2.2-5.76-2.22 5.76zm7.69-8.76h3.94l3.68 10.06h.06l3.64-10.06h4v14.16h-2.5v-11.38l-4.3 11.38h-1.76l-4.24-11.38v11.38h-2.4zM205 167.1V66.76a.11.11 0 00-.05-.09l-86.9-50.17a.09.09 0 00-.1 0l-86.9 50.17a.11.11 0 00-.05.09V167.1a.11.11 0 00.05.09L118 217.36a.09.09 0 00.1 0l86.9-50.17a.11.11 0 000-.09z" /><path d="M118 233.86a16.62 16.62 0 01-8.14-2.12l-.16-.09-86.9-50.17a16.63 16.63 0 01-8.3-14.38v-110l8.31-4.73 87.05-50.25a16.67 16.67 0 0116.28 0l.16.09 86.82 50.12 8.33 4.67.05 9.74V167.1a16.63 16.63 0 01-8.3 14.38l-87.06 50.26a16.65 16.65 0 01-8.14 2.12zm-70.5-76.23l70.5 40.71 70.5-40.71v-81.4L118 35.52 47.5 76.23z" /><path d="M205 167.1V66.76a.11.11 0 00-.05-.09l-86.9-50.17a.09.09 0 00-.1 0l-86.9 50.17a.11.11 0 00-.05.09V167.1a.11.11 0 00.05.09L118 217.36a.09.09 0 00.1 0l86.9-50.17a.11.11 0 000-.09z" /></g><path d="M118 225.36a8 8 0 01-4-1l-87-50.21a8.08 8.08 0 01-4.05-7v-105l4.13-2.38L114 9.57a8.18 8.18 0 018 0l91 52.52.05 4.71v100.3a8.1 8.1 0 01-4.13 7.06l-86.82 50.13a8.36 8.36 0 01-4.1 1.07zm-79-62.82l79 45.61 79-45.61V71.32l-79-45.61-79 45.61zm162-2.28l-.15.08zm-166 0l.16.09z" fill="#33475b" /><path d="M82.02 78.65H118" fill="#dfe3eb" /><path d="M118 80.15H82a1.5 1.5 0 010-3h36a1.5 1.5 0 010 3z" fill="#cbd6e2" /><path d="M86.84 60.66L118 78.65" fill="#dfe3eb" /><path d="M118 80.15a1.46 1.46 0 01-.75-.2L86.09 62a1.49 1.49 0 01-.55-2.05 1.51 1.51 0 012-.55l31.16 18a1.49 1.49 0 01-.75 2.79z" fill="#cbd6e2" /><path d="M100.01 47.49L118 78.65" fill="#dfe3eb" /><path d="M118 80.15a1.48 1.48 0 01-1.3-.75l-18-31.16a1.5 1.5 0 012.6-1.5l18 31.16a1.5 1.5 0 01-.55 2 1.46 1.46 0 01-.75.25z" fill="#cbd6e2" /><path d="M118 42.67v35.98" fill="#dfe3eb" /><path d="M118 80.15a1.5 1.5 0 01-1.5-1.5v-36a1.5 1.5 0 013 0v36a1.5 1.5 0 01-1.5 1.5z" fill="#cbd6e2" /><path d="M135.99 47.49L118 78.65" fill="#dfe3eb" /><path d="M118 80.15a1.46 1.46 0 01-.75-.2 1.5 1.5 0 01-.55-2l18-31.16a1.5 1.5 0 112.6 1.5l-18 31.16a1.48 1.48 0 01-1.3.7z" fill="#cbd6e2" /><path d="M149.16 60.66L118 78.65" fill="#dfe3eb" /><path d="M118 80.15a1.49 1.49 0 01-.75-2.79l31.16-18a1.5 1.5 0 111.5 2.6L118.75 80a1.46 1.46 0 01-.75.15z" fill="#cbd6e2" /><path d="M153.98 78.65H118" fill="#dfe3eb" /><path d="M154 80.15h-36a1.5 1.5 0 010-3h36a1.5 1.5 0 010 3z" fill="#cbd6e2" /><path d="M153.98 155.2H118" fill="#dfe3eb" /><path d="M154 156.7h-36a1.5 1.5 0 010-3h36a1.5 1.5 0 010 3z" fill="#cbd6e2" /><path d="M149.16 173.2l-31.16-18" fill="#dfe3eb" /><path d="M149.16 174.7a1.59 1.59 0 01-.75-.2l-31.16-18a1.5 1.5 0 111.5-2.59l31.16 18a1.5 1.5 0 01-.75 2.8z" fill="#cbd6e2" /><path d="M135.99 186.37L118 155.2" fill="#dfe3eb" /><path d="M136 187.87a1.51 1.51 0 01-1.3-.75l-18-31.12a1.5 1.5 0 012.6-1.5l18 31.17a1.5 1.5 0 01-.55 2 1.53 1.53 0 01-.75.2z" fill="#cbd6e2" /><path d="M118 191.19V155.2" fill="#dfe3eb" /><path d="M118 192.69a1.5 1.5 0 01-1.5-1.5v-36a1.5 1.5 0 013 0v36a1.5 1.5 0 01-1.5 1.5z" fill="#cbd6e2" /><path d="M100.01 186.37L118 155.2" fill="#dfe3eb" /><path d="M100 187.87a1.53 1.53 0 01-.75-.2 1.5 1.5 0 01-.55-2l18-31.17a1.5 1.5 0 012.6 1.5l-18 31.17a1.51 1.51 0 01-1.3.7z" fill="#cbd6e2" /><path d="M86.84 173.2l31.16-18" fill="#dfe3eb" /><path d="M86.84 174.7a1.5 1.5 0 01-.75-2.8l31.16-18a1.5 1.5 0 111.5 2.59l-31.16 18a1.59 1.59 0 01-.75.21z" fill="#cbd6e2" /><path d="M82.02 155.2H118" fill="#dfe3eb" /><path d="M118 156.7H82a1.5 1.5 0 110-3h36a1.5 1.5 0 010 3z" fill="#cbd6e2" /><rect fill="#ff7a59" height="46" rx="3.02" width="220" x="8" y="92.93" /><path d="M225 92.93a3 3 0 013 3v40a3 3 0 01-3 3H11a3 3 0 01-3-3v-40a3 3 0 013-3zm0-8H11a11 11 0 00-11 11v40a11 11 0 0011 11h214a11 11 0 0011-11v-40a11 11 0 00-11-11z" fill="#fff" /><path d="M60.38 105.88h7a15.4 15.4 0 013.89.51 10.06 10.06 0 013.53 1.66 8.9 8.9 0 012.55 3 10.17 10.17 0 011 4.69 9.59 9.59 0 01-1 4.48 9.3 9.3 0 01-2.55 3.08 10.49 10.49 0 01-3.53 1.78 13.89 13.89 0 01-3.89.58h-7zm6.47 16.75a11.66 11.66 0 002.74-.33 6.93 6.93 0 002.48-1.09 5.84 5.84 0 001.81-2.08 7.16 7.16 0 00.7-3.34 7.62 7.62 0 00-.7-3.47 5.74 5.74 0 00-1.81-2.1 6.66 6.66 0 00-2.48-1 13.41 13.41 0 00-2.74-.28h-2.94v13.72zm14.2-14.93a1.93 1.93 0 01.6-1.41 2.07 2.07 0 011.53-.6 2.21 2.21 0 011.55.57 2 2 0 010 2.88 2.18 2.18 0 01-1.55.58 2.07 2.07 0 01-1.53-.6 2 2 0 01-.6-1.42zm.48 4.57h3.36v13.44h-3.36zM97.14 124h-.09a3.66 3.66 0 01-1.62 1.47 5.56 5.56 0 01-2.55.57 7.3 7.3 0 01-1.69-.21 5 5 0 01-1.63-.7 4 4 0 01-1.23-1.29 3.76 3.76 0 01-.49-2 3.35 3.35 0 01.86-2.41 5.57 5.57 0 012.19-1.37 12.17 12.17 0 013-.63c1.09-.1 2.16-.15 3.2-.15V117a2.06 2.06 0 00-.91-1.86 3.86 3.86 0 00-2.17-.6 5 5 0 00-2 .44 5.49 5.49 0 00-1.63 1.1l-1.73-2a7.41 7.41 0 012.64-1.59 8.94 8.94 0 013-.54 7.42 7.42 0 013 .51 4.59 4.59 0 012.77 3.13 8.29 8.29 0 01.26 2v8.18h-3.18zm-.06-4.43h-.75c-.55 0-1.11 0-1.71.07A7.44 7.44 0 0093 120a3.43 3.43 0 00-1.26.67 1.49 1.49 0 00-.51 1.19 1.42 1.42 0 00.21.8 1.52 1.52 0 00.55.52 2.48 2.48 0 00.75.28 4 4 0 00.84.08 3.16 3.16 0 003.53-3.44zm23.05-7.7a5.06 5.06 0 012.26.47 4.41 4.41 0 011.54 1.21 5.1 5.1 0 01.88 1.74 7.19 7.19 0 01.28 2v8.4h-3.36v-7.45a10.71 10.71 0 00-.08-1.23 3.42 3.42 0 00-.37-1.17 2.32 2.32 0 00-.77-.85 2.3 2.3 0 00-1.3-.34 2.59 2.59 0 00-1.34.34 2.77 2.77 0 00-.93.87 3.67 3.67 0 00-.53 1.19 5.34 5.34 0 00-.17 1.3v7.34h-3.36v-8.12a3.47 3.47 0 00-.6-2.09 2.18 2.18 0 00-1.89-.83 2.59 2.59 0 00-1.32.33 2.87 2.87 0 00-.91.82 4 4 0 00-.53 1.16 5.07 5.07 0 00-.18 1.33v7.4h-3.36v-13.42h3.19v2.15h.06a4.2 4.2 0 01.6-1 4.4 4.4 0 01.9-.81 4.25 4.25 0 011.19-.58 4.9 4.9 0 011.48-.21 4.6 4.6 0 012.6.7 4.7 4.7 0 011.6 1.85 4.87 4.87 0 011.79-1.89 5.11 5.11 0 012.63-.61zm8 7.06a7.18 7.18 0 01.57-2.9 6.75 6.75 0 013.88-3.65 8 8 0 012.86-.51 7.92 7.92 0 012.85.51 6.75 6.75 0 012.33 1.43 6.67 6.67 0 011.55 2.22 7.18 7.18 0 01.58 2.9 7.27 7.27 0 01-.58 2.91 6.94 6.94 0 01-1.55 2.26 7.33 7.33 0 01-2.33 1.47 7.72 7.72 0 01-2.85.53 7.81 7.81 0 01-2.86-.53 7.29 7.29 0 01-2.32-1.47 7 7 0 01-1.56-2.26 7.26 7.26 0 01-.57-2.91zm3.42 0a5.68 5.68 0 00.23 1.57 4.33 4.33 0 00.72 1.4 3.83 3.83 0 001.2 1 3.66 3.66 0 001.74.39 3.59 3.59 0 001.73-.39 3.87 3.87 0 001.21-1 4.51 4.51 0 00.71-1.4 5.35 5.35 0 00.24-1.57 5.17 5.17 0 00-.24-1.55 4.46 4.46 0 00-.71-1.39 3.58 3.58 0 00-2.94-1.37 3.66 3.66 0 00-1.74.38 3.53 3.53 0 00-1.2 1 4.28 4.28 0 00-.72 1.39 5.49 5.49 0 00-.23 1.54zm14.3-6.66h3.2v2.15a4.41 4.41 0 011.56-1.78 4.47 4.47 0 012.61-.77 5.06 5.06 0 012.26.47 4.41 4.41 0 011.54 1.21 5.1 5.1 0 01.88 1.74 7.19 7.19 0 01.28 2v8.4h-3.36v-7.45a10.71 10.71 0 00-.08-1.23 3.42 3.42 0 00-.37-1.17 2.32 2.32 0 00-.77-.85 2.28 2.28 0 00-1.3-.34 2.81 2.81 0 00-1.4.33 3.1 3.1 0 00-1 .82 3.8 3.8 0 00-.57 1.16 4.71 4.71 0 00-.2 1.33v7.4h-3.36zm29.88 13.44h-3.19v-2h-.06a4.54 4.54 0 01-1.94 1.79 6 6 0 01-2.68.62 6.27 6.27 0 01-2.75-.58A6.13 6.13 0 01163 124a6.87 6.87 0 01-1.32-2.26 8.25 8.25 0 01-.46-2.79 8.1 8.1 0 01.47-2.77 6.74 6.74 0 011.35-2.24 6.19 6.19 0 012.07-1.5 6.35 6.35 0 012.63-.55 5.9 5.9 0 011.65.21 6.32 6.32 0 011.28.52 5.3 5.3 0 01.93.67 5.73 5.73 0 01.65.7h.08v-9.43h3.36zm-11.06-6.78a5.35 5.35 0 00.24 1.57 4.33 4.33 0 00.72 1.4 3.72 3.72 0 001.2 1 3.54 3.54 0 001.71.39 3.58 3.58 0 001.65-.38 4 4 0 001.24-1 4.36 4.36 0 00.79-1.39 4.63 4.63 0 00.26-1.55 4.74 4.74 0 00-.26-1.57 4.3 4.3 0 00-.79-1.4 4.2 4.2 0 00-1.24-1 3.46 3.46 0 00-1.65-.39 3.54 3.54 0 00-1.71.38 3.43 3.43 0 00-1.2 1 4.28 4.28 0 00-.72 1.39 5.17 5.17 0 00-.24 1.55zM38.89 116c0-.56-.82-1.06-2.14-1.44a6 6 0 01-4.15-4.14c-.37-1.33-.88-2.14-1.43-2.14s-1.06.81-1.44 2.14a6 6 0 01-4.14 4.14c-1.33.38-2.14.88-2.14 1.44s.81 1.06 2.14 1.43a6 6 0 014.14 4.15c.38 1.32.88 2.14 1.44 2.14s1.06-.82 1.43-2.14a6 6 0 014.15-4.15c1.32-.43 2.14-.93 2.14-1.43zm174.11-.09c0-.56-.81-1.06-2.14-1.43a6 6 0 01-4.14-4.15c-.38-1.32-.88-2.14-1.44-2.14s-1.06.82-1.43 2.14a6 6 0 01-4.15 4.15c-1.32.37-2.14.87-2.14 1.43s.82 1.06 2.14 1.43a6 6 0 014.15 4.15c.37 1.32.88 2.14 1.43 2.14s1.06-.82 1.44-2.14a6 6 0 014.14-4.15c1.28-.34 2.14-.87 2.14-1.43z" fill="#fff" /></svg>
                </div>
            </div>
        </>
    )
}

export default TalkDigitally