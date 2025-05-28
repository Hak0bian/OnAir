import { Features } from '../../components'
import '../../components/global.css'

const FeaturesPage = () => {
    return (
        <section>
            <div className='sectionHeader'>
                <h2 className='sectionTitle'>Our Features</h2>
            </div>
            <div style={{padding: '80px 0'}}>
                <Features/>
            </div>
        </section>
    )
}

export default FeaturesPage