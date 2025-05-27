import { useState } from 'react'
import { useAppSelector } from '../../store/hooks/hooks'
import { translations } from '../../translations/translations'
import MainButton from '../UI/MainButton/MainButton'
import styles from './SelectPlan.module.css'
import RegisterForm from '../Forms/RegisterForm/RegisterForm'
import SelectPlanForm from '../Forms/SelectPlanForm/SelectPlanForm'

const SelectPlan = () => {
    const { selectedLanguage } = useAppSelector((state) => state.languagesData)
    const t = translations[selectedLanguage].selectPlan
    const [openSignUpForm, setOpenSignUpForm] = useState(false);
    const handleOpenSignUp = () => setOpenSignUpForm(true);
    const handleCloseSignUp = () => setOpenSignUpForm(false);

    const [openSelectPlan, setOpenSelectPlan] = useState(false);
    const handleOpenSelectPlan = () => setOpenSelectPlan(true);
    const handleCloseSelectPlan = () => setOpenSelectPlan(false);

    return (
        <section className={styles.planSection}>
            <h2 className={styles.planTitle}>{t.planTitle}</h2>
            <div className={styles.planContainer}>
                <div className={styles.planDiv}>
                    <div className={styles.planTitleDiv}>
                        <h2 className={styles.planName}>{t.planName1}</h2>
                        <h2 className={styles.plan}>{t.plan}</h2>
                    </div>
                    <div>
                        <ul className={styles.planList}>
                            <li>{t.planList1.listItem1}</li>
                            <li>{t.planList1.listItem2}</li>
                            <li>{t.planList1.listItem3}</li>
                            <li>{t.planList1.listItem4}</li>
                            <li>{t.planList1.listItem5}</li>
                        </ul>
                        <div className={styles.planBtnDiv}>
                            <MainButton text={t.btn1} onClick={handleOpenSignUp} />
                        </div>
                    </div>
                    <RegisterForm 
                        openSignUpForm={openSignUpForm} 
                        handleCloseSignUp={handleCloseSignUp}
                        handleOpenSignUp={handleOpenSignUp}
                    />
                </div>

                <div className={`${styles.planDiv} ${styles.actualPlan}`}>
                    <div className={styles.planTitleDiv}>
                        <h2 className={styles.planName}>{t.planName2}</h2>
                        <h2 className={styles.plan}>$19.99</h2>
                    </div>
                    <div>
                        <ul className={styles.planList}>
                            <li>{t.planList2.listItem1}</li>
                            <li>{t.planList2.listItem2}</li>
                            <li>{t.planList2.listItem3}</li>
                            <li>{t.planList2.listItem4}</li>
                            <li>{t.planList2.listItem5}</li>
                        </ul>
                    </div>
                    <div className={styles.planBtnDiv}>
                        <MainButton text={t.btn2} onClick={handleOpenSelectPlan}/>
                    </div>
                    <SelectPlanForm openSelectPlan={openSelectPlan} handleCloseSelectPlan={handleCloseSelectPlan} />
                </div>

                <div className={styles.planDiv}>
                    <div className={styles.planTitleDiv}>
                        <h2 className={styles.planName}>{t.planName3}</h2>
                        <h2 className={styles.plan}>$39.99</h2>
                    </div>
                    <div>
                        <ul className={styles.planList}>
                            <li>{t.planList3.listItem1}</li>
                            <li>{t.planList3.listItem2}</li>
                            <li>{t.planList3.listItem3}</li>
                            <li>{t.planList3.listItem4}</li>
                            <li>{t.planList3.listItem5}</li>
                        </ul>
                    </div>
                    <div className={styles.planBtnDiv}>
                        <MainButton text={t.btn2} onClick={handleOpenSelectPlan}/>
                    </div>
                    <SelectPlanForm openSelectPlan={openSelectPlan} handleCloseSelectPlan={handleCloseSelectPlan} />
                </div>
            </div>
        </section>
    )
}

export default SelectPlan