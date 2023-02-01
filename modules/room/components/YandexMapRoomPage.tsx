import style from '../../../styles/YandexMapRoomPage.module.scss'

const YandexMapRoomPage = ({ data }: any) => {
    return (
        <div className={style.wrapper}>
            <iframe
                src={data.iframeHref}
                width='800'
                height='400'
                style={{
                    border: 'none',
                    borderRadius: '0.5rem',
                    boxShadow:
                        'rgb(0 0 0 / 30%) 0rem 0.45rem 0.775rem -0.0625rem, rgb(0 0 0 / 10%) 0rem 0.125rem 1.25rem -0.0625rem',
                }}
            ></iframe>
        </div>
    )
}

export default YandexMapRoomPage
