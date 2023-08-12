import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import {
  RadioButton,
  LabelWrapper,
  Container,
  ContainerWarepper,
  DecorativeElement,
  Button,
} from './Filter.styled';
import { filterPriority } from '../../redux/filter/filterSlice';

const Filter = () => {
  const [selectedPriority, setSelectedPriority] = useState('');

  const dispatch = useDispatch();

  const handleFilteredPriority = evt => {
    setSelectedPriority(evt.target.value);

    dispatch(filterPriority(evt.target.value));
    console.log(evt.target.value);
  };

  const onClickAll = () => {
    setSelectedPriority('all');
    dispatch(filterPriority('all'));
    // console.log(dispatch(filterPriority('all')));
  };

  return (
    <div>
      <Container>
        <DecorativeElement />
        <ContainerWarepper>
          <h3>Label color</h3>
          <Button type="button" onClick={onClickAll}>
            Show all
          </Button>
        </ContainerWarepper>
      </Container>

      <Formik
        initialValues={{ selectedValue: '' }}
        onSubmit={values => {
          console.log('Selected value:', values.selectedValue);
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            <LabelWrapper>
              <RadioButton
                type="radio"
                name="priority"
                value="without priority"
                checked={selectedPriority === 'without priority'}
                onChange={handleFilteredPriority}
                color="rgba(255, 255, 255, 0.3)"
              />
              Without priority
            </LabelWrapper>

            <LabelWrapper>
              <RadioButton
                type="radio"
                name="priority"
                value="low"
                checked={selectedPriority === 'low'}
                onChange={handleFilteredPriority}
                color="#8FA1D0"
              />
              Low
            </LabelWrapper>

            <LabelWrapper>
              <RadioButton
                type="radio"
                name="priority"
                value="medium"
                checked={selectedPriority === 'medium'}
                onChange={handleFilteredPriority}
                color="#E09CB5"
              />
              Medium
            </LabelWrapper>

            <LabelWrapper>
              <RadioButton
                type="radio"
                name="priority"
                value="high"
                checked={selectedPriority === 'high'}
                onChange={handleFilteredPriority}
                color="#BEDBB0"
              />
              High
            </LabelWrapper>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Filter;

// import { FormControlLabel } from '@mui/material';
// import { RadioWrapper } from './Filter.styled';

// const FilterForm = () => {
//   return(
//     <div>
//       <form>
//         <input type="radio" />
//         <input type="radio"/>
//         <input type="radio" />
//         <input type="radio" />
//       </form>
//     </div>
//   )
// }

// const FilterForm = () => {
//   return (
//     <div>
//       <Formik
//         initialValues={{ selectedValue: '' }}
//         onSubmit={(values) => {
//           console.log('Selected value:', values.selectedValue);
//         }}
//       >
//         {({ values, handleChange }) => (
//           <Form>
//             <FormControlLabel
//               value="option1"
//               control={
//                 <Field
//                   as={RadioWrapper}
//                   type="radio"
//                   name="selectedValue"
//                   color="red"
//                   value="option1"
//                   checked={values.selectedValue === 'option1'}
//                   onChange={handleChange}
//                 />
//               }
//             />
//             <FormControlLabel
//               value="option2"
//               control={
//                 <Field
//                   as={RadioWrapper}
//                   type="radio"
//                   name="selectedValue"
//                   color="blue"
//                   value="option2"
//                   checked={values.selectedValue === 'option2'}
//                   onChange={handleChange}
//                 />
//               }
//             />
//             <FormControlLabel
//               value="option3"
//               control={
//                 <Field
//                   as={RadioWrapper}
//                   type="radio"
//                   name="selectedValue"
//                   color="green"
//                   value="option3"
//                   checked={values.selectedValue === 'option3'}
//                   onChange={handleChange}
//                 />
//               }
//             />
//             <FormControlLabel
//               value="option4"
//               control={
//                 <Field
//                   as={RadioWrapper}
//                   type="radio"
//                   name="selectedValue"
//                   color="purple"
//                   value="option4"
//                   checked={values.selectedValue === 'option4'}
//                   onChange={handleChange}
//                 />
//               }
//             />
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// const Filter = () => {
//   const [selectedValue, setSelectedValue] = useState('');

//   const handleRadioChange = event => {
//     setSelectedValue(event.target.value);
//   };

//   return (
//     <div>
//       <FormControl>
//         <FormLabel>Label color</FormLabel>
//         <Button variant="text">Show all</Button>
//         <RadioGroup
//           value={selectedValue}
//           onChange={handleRadioChange}
//           name="radio-buttons-group"
//         >
//           <FormControlLabel
//             value="option1"
//             control={<RadioWrapper color="red" />}
//           />
//           <FormControlLabel
//             value="option2"
//             control={<RadioWrapper color="blue" />}
//           />
//           <FormControlLabel
//             value="option3"
//             control={<RadioWrapper color="green" />}
//           />
//           <FormControlLabel
//             value="option4"
//             control={<RadioWrapper color="purple" />}
//           />
//         </RadioGroup>
//       </FormControl>
//     </div>
//   );
// };

// export default Filter;
