import style from '../styleIndex/YandexMapMain.module.scss'

const YandexMapMain = () => (
    <div
        style={{
            margin: '0 auto ',
        }}
    >
        <div className={style.wrapper}>
            <iframe
                src='https://yandex.ru/map-widget/v1/?um=constructor%3Ab2259d20b0322033a82cc0c2d67027b89c402786686d6b0517a0494bc0be5bfb&amp;source=constructor'
                width='900'
                height='500'
            ></iframe>
        </div>
    </div>
)

export default YandexMapMain
