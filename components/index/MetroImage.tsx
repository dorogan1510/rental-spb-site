import Image from 'next/image'
import metro_marks from '../../public/static/img/metro_marks.jpg'

const MetroImage = () => {
    return (
        <div
            style={{
                margin: '0 auto ',
            }}
        >
            <Image
                src={metro_marks}
                alt={'metro-map'}
                style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '0.5rem',
                }}
            />
        </div>
    )
}

export default MetroImage
