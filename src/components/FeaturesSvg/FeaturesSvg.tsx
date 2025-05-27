import styles from './FeaturesSvg.module.css'

const FeaturesSvg = ({ path }: { path: string }) => {
    return (
        <div className={styles.svgDiv}>
            <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
            >
                <path d={`${path}`}></path>
            </svg>
        </div>
    )
}

export default FeaturesSvg