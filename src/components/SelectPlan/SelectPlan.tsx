import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import { translations } from '../../translations/translations'
import { showSelectPlanForm, showSignUpForm } from '../../store/slices/OpenCloseFormsSlice/OpenCloseFormsSlice'
import RegisterForm from '../Forms/RegisterForm/RegisterForm'
import SelectPlanForm from '../Forms/SelectPlanForm/SelectPlanForm'
import MainButton from '../UI/MainButton/MainButton'
import styles from './SelectPlan.module.css'


const SelectPlan = () => {
    const { selectedLanguage } = useAppSelector((state) => state.languagesData)
    const t = translations[selectedLanguage].selectPlan
    const dispatch = useAppDispatch()

    const handleOpenSignUp = () => {
        dispatch(showSignUpForm(true))
    }

    const handleOpenSelectPlan = () => {
        dispatch(showSelectPlanForm(true))
    }
    
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
                    <RegisterForm handleOpenSignUp={handleOpenSignUp} />
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
                    <SelectPlanForm />
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
                    <SelectPlanForm />
                </div>
            </div>
        </section>
    )
}

export default SelectPlan