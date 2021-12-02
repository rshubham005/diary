import HTMLFlipBook from 'react-pageflip';

import hills from './hill.png'

function PageFlip() {
    return (
        <HTMLFlipBook width={400} height={650} maxWidth={500} maxHeight={750}  showCover={true} usePortrait={true}>
            {/* <div className="demoPage">
                <h1>Hello Everone</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div> */}
            {/* <div className="demoPage">Page 2
                <img src={dummy} alt="dummy" />
            </div> */}
            <div className="demoPage">
                <img src={hills} alt="hills" />
                <p>Insaan itni dur pahadon ki wadiyon me kyu jata hai,</p>
                <p>Sukoon ki talaash me ,</p>
                <p>Toh kyu na..</p>
                <p>Kuch pal fursat k nikaal k inn wadiyon se sukoon ka waqt sameet liya jaye..!!</p>
            </div>
            <div className="demoPage">
                <img src={hills} alt="hills" />
                <p>Insaan itni dur pahadon ki wadiyon me kyu jata hai,</p>
                <p>Sukoon ki talaash me ,</p>
                <p>Toh kyu na..</p>
                <p>Kuch pal fursat k nikaal k inn wadiyon se sukoon ka waqt sameet liya jaye..!!</p>
            </div>
            <div className="demoPage">
                <img src={hills} alt="hills" />
                <p>Insaan itni dur pahadon ki wadiyon me kyu jata hai,</p>
                <p>Sukoon ki talaash me ,</p>
                <p>Toh kyu na..</p>
                <p>Kuch pal fursat k nikaal k inn wadiyon se sukoon ka waqt sameet liya jaye..!!</p>
            </div>
            <div className="demoPage">
                <img src={hills} alt="hills" />
                <p>Insaan itni dur pahadon ki wadiyon me kyu jata hai,</p>
                <p>Sukoon ki talaash me ,</p>
                <p>Toh kyu na..</p>
                <p>Kuch pal fursat k nikaal k inn wadiyon se sukoon ka waqt sameet liya jaye..!!</p>
            </div>
            <div className="demoPage">
                <img src={hills} alt="hills" />
                <p>Insaan itni dur pahadon ki wadiyon me kyu jata hai,</p>
                <p>Sukoon ki talaash me ,</p>
                <p>Toh kyu na..</p>
                <p>Kuch pal fursat k nikaal k inn wadiyon se sukoon ka waqt sameet liya jaye..!!</p>
            </div>
            {/* <div className="demoPage">Page 4</div> */}
        </HTMLFlipBook>
    );
}
export default PageFlip;