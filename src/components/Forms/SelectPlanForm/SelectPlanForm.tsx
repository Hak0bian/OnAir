import {
    Dialog, DialogContent, IconButton, FormControl, InputLabel,
    Select, MenuItem, RadioGroup, FormControlLabel, Radio
} from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from "formik"
import { useAppDispatch, useAppSelector } from '../../../store/hooks/hooks';
import { showSelectPlanForm } from '../../../store/slices/OpenCloseFormsSlice/OpenCloseFormsSlice';
import { translations } from '../../../translations/translations';
import CloseIcon from '@mui/icons-material/Close';
import validation from '../validations/registerValidation';
import MainButton from '../../UI/MainButton/MainButton';
import styles from './SelectPlanForm.module.css'
import '../../global.css'


const SelectPlanForm = () => {
    const { selectedLanguage } = useAppSelector((state) => state.languagesData)
    const { selectPlan } = useAppSelector((state) => state.formsData)
    const t = translations[selectedLanguage].forms
    const dispatch = useAppDispatch()

    const handleCloseSelectPlan = () => {
        dispatch(showSelectPlanForm(false))
    }

    return (
        <div>
            <Dialog open={selectPlan} onClose={handleCloseSelectPlan} maxWidth="xs" fullWidth>
                <DialogContent sx={{ position: 'relative', p: 0 }}>
                    <IconButton onClick={handleCloseSelectPlan}
                        sx={{
                            position: 'absolute', top: 4, right: 4, color: 'var(--text-color-primary)',
                            '&:hover': { color: 'var(--text-color-secondary)' }
                        }}
                    >
                        <CloseIcon sx={{ fontSize: '20px' }} />
                    </IconButton>
                    <div className={styles.selectPlanDiv}>
                        <h2 className={styles.divTitle}>{t.choose}</h2>
                        <Formik
                            initialValues={{
                                name: "",
                                email: "",
                                plan: ""
                            }}
                            onSubmit={() => handleCloseSelectPlan()}
                            validationSchema={validation}
                        >
                            <Form className={styles.selectPlanForm}>
                                <label>
                                    <Field name="name" placeholder={t.name} className={styles.inp} />
                                    <ErrorMessage name="name" component="div" className={styles.error} />
                                </label>
                                <label>
                                    <Field name="email" placeholder={t.email} className={styles.inp} />
                                    <ErrorMessage name="email" component="div" className={styles.error} />
                                </label>
                                <FormControl fullWidth>
                                    <InputLabel>{t.choose}</InputLabel>
                                    <Field name="plan" as={Select} label={t.choose} >
                                        <MenuItem value='Visa'>{t.premium}</MenuItem>
                                        <MenuItem value='Mastercard'>{t.ultra}</MenuItem>
                                    </Field>
                                    <ErrorMessage name="plan" component="div" className={styles.error} />
                                </FormControl>

                                <FormControl fullWidth>
                                    <h4 className={styles.method}>{t.method}</h4>
                                    <RadioGroup>
                                        <FormControlLabel value={t.visa} label={t.visa}
                                            control={<Radio size='small'
                                                sx={{ color: '#FF5690', '&.Mui-checked': { color: '#FF5690' } }} />
                                            }
                                        />
                                        <FormControlLabel value={t.mastercard} label={t.mastercard}
                                            control={<Radio size='small'
                                                sx={{ color: '#FF5690', '&.Mui-checked': { color: '#FF5690' } }} />
                                            }
                                        />
                                        <FormControlLabel value={t.other} label={t.other}
                                            control={<Radio size='small'
                                                sx={{ color: '#FF5690', '&.Mui-checked': { color: '#FF5690' } }} />
                                            }
                                        />
                                    </RadioGroup>
                                </FormControl>
                                <label className={styles.btnLabel}>
                                    <MainButton text={t.continue} />
                                </label>
                            </Form>
                        </Formik>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default SelectPlanForm