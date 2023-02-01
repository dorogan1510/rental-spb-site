import Image from 'next/image'
import metro from '../../../public/static/img/metro.jpg'

const MetroImage = () => {
    return (
        <div
            style={{
                margin: '0 auto ',
            }}
        >
            <Image
                src={metro}
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
