import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import { useAppSelector } from '../../store/hooks/hooks';
import { translations } from '../../translations/translations';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './HelpCenter.module.css'

const HelpCenter = () => {
    const { selectedLanguage } = useAppSelector((state) => state.languagesData)
    const t = translations[selectedLanguage].helpCenter

    return (
        <section className={styles.accordionsSection}>
            <div>
                <Accordion className={styles.accordion}>
                    <AccordionSummary className={styles.summary}
                        expandIcon={<ExpandMoreIcon className={styles.accordionIcon} />}>
                        {t.summary1}
                    </AccordionSummary>
                    <AccordionDetails className={styles.details}> {t.details1} </AccordionDetails>
                </Accordion>

                <Accordion className={styles.accordion}>
                    <AccordionSummary className={styles.summary}
                        expandIcon={<ExpandMoreIcon className={styles.accordionIcon} />}>
                        {t.summary2}
                    </AccordionSummary>
                    <AccordionDetails className={styles.details}> {t.details2} </AccordionDetails>
                </Accordion>

                <Accordion className={styles.accordion}>
                    <AccordionSummary className={styles.summary}
                        expandIcon={<ExpandMoreIcon className={styles.accordionIcon} />}>
                        {t.summary3}
                    </AccordionSummary>
                    <AccordionDetails className={styles.details}> {t.details3} </AccordionDetails>
                </Accordion>
                
                <Accordion className={styles.accordion}>
                    <AccordionSummary className={styles.summary}
                        expandIcon={<ExpandMoreIcon className={styles.accordionIcon} />}>
                        {t.summary4}
                    </AccordionSummary>
                    <AccordionDetails className={styles.details}> {t.details4} </AccordionDetails>
                </Accordion>
                
                <Accordion className={styles.accordion}>
                    <AccordionSummary className={styles.summary}
                        expandIcon={<ExpandMoreIcon className={styles.accordionIcon} />}>
                        {t.summary5}
                    </AccordionSummary>
                    <AccordionDetails className={styles.details}> {t.details5} </AccordionDetails>
                </Accordion>
                
                <Accordion className={styles.accordion}>
                    <AccordionSummary className={styles.summary}
                        expandIcon={<ExpandMoreIcon className={styles.accordionIcon} />}>
                        {t.summary6}
                    </AccordionSummary>
                    <AccordionDetails className={styles.details}> {t.details6} </AccordionDetails>
                </Accordion>
            </div>

            <div>
                <Accordion className={styles.accordion}>
                    <AccordionSummary className={styles.summary}
                        expandIcon={<ExpandMoreIcon className={styles.accordionIcon} />}>
                        {t.summary7}
                    </AccordionSummary>
                    <AccordionDetails className={styles.details}> {t.details7} </AccordionDetails>
                </Accordion>
                
                <Accordion className={styles.accordion}>
                    <AccordionSummary className={styles.summary}
                        expandIcon={<ExpandMoreIcon className={styles.accordionIcon} />}>
                        {t.summary8}
                    </AccordionSummary>
                    <AccordionDetails className={styles.details}> {t.details8} </AccordionDetails>
                </Accordion>
                
                <Accordion className={styles.accordion}>
                    <AccordionSummary className={styles.summary}
                        expandIcon={<ExpandMoreIcon className={styles.accordionIcon} />}>
                        {t.summary9}
                    </AccordionSummary>
                    <AccordionDetails className={styles.details}> {t.details9} </AccordionDetails>
                </Accordion>
                
                <Accordion className={styles.accordion}>
                    <AccordionSummary className={styles.summary}
                        expandIcon={<ExpandMoreIcon className={styles.accordionIcon} />}>
                        {t.summary10}
                    </AccordionSummary>
                    <AccordionDetails className={styles.details}> {t.details10} </AccordionDetails>
                </Accordion>
                
                <Accordion className={styles.accordion}>
                    <AccordionSummary className={styles.summary}
                        expandIcon={<ExpandMoreIcon className={styles.accordionIcon} />}>
                        {t.summary11}
                    </AccordionSummary>
                    <AccordionDetails className={styles.details}> {t.details11} </AccordionDetails>
                </Accordion>
                
                <Accordion className={styles.accordion}>
                    <AccordionSummary className={styles.summary}
                        expandIcon={<ExpandMoreIcon className={styles.accordionIcon} />}>
                        {t.summary12}
                    </AccordionSummary>
                    <AccordionDetails className={styles.details}> {t.details12} </AccordionDetails>
                </Accordion>
            </div>
        </section>
    )
}

export default HelpCenter