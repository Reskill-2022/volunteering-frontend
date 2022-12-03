import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Flex,
  Checkbox,
  Link,
  Button,
  Center,
  Text,
  OrderedList,
  ListItem,
  Select,
  FormHelperText,
  RadioGroup,
  Radio,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { listOfUsStates } from '../data/us_states';
import { listOfHelpSubjects } from '../data/help_subjects';
import { listOfVolunteerMethods } from '../data/volunteer_methods';
import { listOfMinorityGroups } from '../data/minority_groups';

// import { Link as RLink } from 'react-router-dom';

const Form = ({ linkedInAuth, emailAddress }) => {
  // question 1 (input type = select)
  const [residentState, setResidentState] = useState('');

  // question 2 (input type = text)
  const [org, setOrg] = useState('');

  // question 3 (input type = radio)
  const [workExperience, setWorkExperience] = useState('');

  // question 4 (input type = checkbox)
  const [volunteerMethods, setVolunteerMethods] = useState([]);
  const [otherVolunteerMethod, setOtherVolunteerMethod] = useState('');

  // question 5 (input type = checkbox)
  const [helpSubjects, setHelpSubjects] = useState([]);
  const [otherHelpSubject, setOtherHelpSubject] = useState('');

  // question 6 (input type = radio)
  const [minorityGroup, setMinorityGroup] = useState('');
  const [otherMinorityGroup, setOtherMinorityGroup] = useState('');

  // question 7 (input type = radio)
  const [convicted, setConvicted] = useState(false);

  // question 8 (input type = text)
  const [volunteerName, setVolunteerName] = useState('');

  const [loading, setLoading] = useState(false);

  const toast = useToast();

  const handleCheckboxSelection = (e, state, setter) => {
    const isChecked = e.target.checked;
    const selected = e.target.value;

    const selectedItems = [...state];

    if (isChecked) {
      if (selected.toLowerCase() !== 'other' && selected !== 'Other:') {
        selectedItems.push(selected);
        setter(selectedItems);
      }
    } else {
      const selectedItems = [...state];
      const index = selectedItems.indexOf(selected);
      if (index > -1) {
        selectedItems.splice(index, 1);
        setter(selectedItems);
      }
    }
  };

  const submitVolunteerData = data => {
    setLoading(true);
    fetch(
      `https://api.reskillamericans.org/volunteering/users/${emailAddress}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    )
      .then(response => {
        if (response.status === 200) {
          response.json();
        } else {
          throw new Error('Can not submit');
        }
      })
      .then(data => {
        toast({
          title: 'Sent successfully!',
          description: 'Thank you for volunteering.',
          status: 'success',
          duration: 9000,
          isClosable: true,
          position: 'top',
        });
        setLoading(false);
        setTimeout(() => {
          window.location.href = 'https://reskillamericans.org';
        }, 3000);
      })
      .catch(error => {
        setLoading(false);
        toast({
          title: 'Failed to send!',
          description: 'There was a problem with sending your response.',
          status: 'error',
          duration: 9000,
          isClosable: true,
          position: 'top',
        });
      });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const formData = {
      state: residentState,
      organization: org,
      years_of_experience: workExperience,
      volunteer_means: [...volunteerMethods, otherVolunteerMethod],
      volunteer_areas: [...helpSubjects, otherHelpSubject],
      representation: minorityGroup,
      convicted: convicted === 'true',
      provided_name: volunteerName,
    };

    submitVolunteerData(formData);
  };

  return (
    <Box w="full">
      <Flex flexDir="column" maxW={1200} margin="0 auto" padding="24px">
        <Center>
          <Box maxW={800} w="full" textAlign="left">
            <Text mb={3}>
              Thank you for your interest in volunteering with Reskill
              Americans. Whether you are an industry veteran or someone who has
              just completed a boot camp yourself, we would love your help! We
              seek volunteer mentors with technical expertise in UI/UX product
              design or full stack web development in the following areas:
            </Text>
            <Text mb={3}>
              Mentor a Participant: Share your technical expertise and
              experience to mentor our participants throughout our seven-month
              training program. Time commitment: 1- 2 hours per week for 7
              months. Timeframe: Starting in Fall 2022.
            </Text>
            <Text mb={3}>
              We seek volunteers that have technical expertise in product design
              and/or full stack web development. Whether you are an industry
              veteran, or someone who has just completed a boot camp yourself,
              we could use your help!
            </Text>
            <Text mb={3}>
              We are asking for a minimum commitment of two hours per week, over
              a period of at least two months. During that time, you will be
              paired with participants that are learning a track that's aligned
              to your skill set.
            </Text>
            <Text mb={3}>
              Please answer the survey below to get started. We can then match
              you with the most appropriate group.
            </Text>

            <form onSubmit={handleSubmit}>
              <OrderedList>
                {/* QUESTION 1 */}
                <ListItem>
                  <FormControl isRequired mb={5}>
                    <FormLabel>State of residence:</FormLabel>
                    <Select
                      placeholder="--select a state--"
                      onChange={e => setResidentState(e.target.value)}
                    >
                      {listOfUsStates.map(({ name, abbreviation }) => {
                        return (
                          <option value={abbreviation} key={abbreviation}>
                            {name}
                          </option>
                        );
                      })}
                    </Select>
                  </FormControl>
                </ListItem>

                {/* QUESTION 2 */}
                <ListItem>
                  <FormControl isRequired mb={5}>
                    <FormLabel>Organization:</FormLabel>
                    <Input
                      type="text"
                      placeholder="example organization"
                      _placeholder={{ opacity: 0.5, color: 'gray.600' }}
                      value={org}
                      onChange={e => setOrg(e.target.value)}
                      border="1px solid"
                      borderColor="blackAlpha.300"
                    />
                    <FormHelperText color="black" fontStyle="italic">
                      Note: Enter "self" if unaffiliated.
                    </FormHelperText>
                  </FormControl>
                </ListItem>

                {/* QUESTION 3 */}
                <ListItem>
                  <FormControl isRequired mb={4}>
                    <FormLabel>
                      Years of work experience in software development or
                      design:
                    </FormLabel>
                    <RadioGroup
                      onChange={setWorkExperience}
                      value={workExperience}
                    >
                      <VStack align="flex-start">
                        <Radio value="0" borderColor="gray.200">
                          0
                        </Radio>
                        <Radio value="1-3" borderColor="gray.200">
                          1 - 3
                        </Radio>
                        <Radio value="4-9" borderColor="gray.200">
                          4 - 9
                        </Radio>
                        <Radio value="10-above" borderColor="gray.200">
                          10 or more
                        </Radio>
                      </VStack>
                    </RadioGroup>
                  </FormControl>
                </ListItem>

                {/* QUESTION 4 */}
                <ListItem>
                  <FormControl mb={4}>
                    <Text fontWeight={500}>
                      In what specific areas would you like to volunteer?
                    </Text>
                    <FormHelperText color="black" fontStyle="italic">
                      Select all that apply.
                    </FormHelperText>
                    <VStack align="flex-start" my={3}>
                      {listOfVolunteerMethods.map(({ title, desc }) => {
                        return (
                          <Checkbox
                            key={title}
                            value={title}
                            borderColor="gray.200"
                            onChange={e =>
                              handleCheckboxSelection(
                                e,
                                volunteerMethods,
                                setVolunteerMethods,
                                otherVolunteerMethod
                              )
                            }
                          >
                            <strong>{title}:</strong> {desc}.
                          </Checkbox>
                        );
                      })}
                    </VStack>
                    <Input
                      type="text"
                      value={otherHelpSubject}
                      onChange={e => setOtherHelpSubject(e.target.value)}
                      border="1px solid"
                      borderColor="blackAlpha.300"
                    />
                  </FormControl>
                </ListItem>

                {/* QUESTION 5 */}
                <ListItem>
                  <FormControl mb={4}>
                    <Text fontWeight={500}>
                      If you selected mentorship, in what specific areas would
                      you be able to help with skills?
                    </Text>
                    <FormHelperText color="black" fontStyle="italic">
                      Select all that apply.
                    </FormHelperText>

                    <VStack align="flex-start" my={3}>
                      {listOfHelpSubjects.map(({ desc, value }) => {
                        return (
                          <Checkbox
                            key={value}
                            value={desc}
                            borderColor="gray.200"
                            onChange={e =>
                              handleCheckboxSelection(
                                e,
                                helpSubjects,
                                setHelpSubjects,
                                otherHelpSubject
                              )
                            }
                          >
                            {desc}
                          </Checkbox>
                        );
                      })}
                    </VStack>
                    <Input
                      type="text"
                      value={otherVolunteerMethod}
                      onChange={e => setOtherVolunteerMethod(e.target.value)}
                      border="1px solid"
                      borderColor="blackAlpha.300"
                    />
                  </FormControl>
                </ListItem>

                {/* QUESTION 6 */}
                <ListItem>
                  <FormControl mb={4}>
                    <FormLabel>
                      Do you self-identify as a historically underrepresented
                      minority?
                    </FormLabel>
                    <RadioGroup
                      onChange={setMinorityGroup}
                      value={minorityGroup}
                    >
                      <VStack align="flex-start">
                        {listOfMinorityGroups.map(({ name, value }) => {
                          return (
                            <Radio
                              value={value}
                              key={value}
                              borderColor="gray.200"
                            >
                              {name}
                            </Radio>
                          );
                        })}
                      </VStack>
                    </RadioGroup>
                    <Input
                      type="text"
                      value={otherMinorityGroup}
                      onChange={e => setOtherMinorityGroup(e.target.value)}
                      border="1px solid"
                      borderColor="blackAlpha.300"
                      my={3}
                    />
                    <FormHelperText color="black" fontStyle="italic">
                      Note: We do not require that our volunteers identify as
                      underrepresented minorities.
                    </FormHelperText>
                    <FormHelperText color="black" fontStyle="italic">
                      See our{' '}
                      <Link
                        href="https://reskillamericans.org/faq"
                        isExternal
                        color="red"
                      >
                        FAQ
                      </Link>{' '}
                      for our definition of underrepresented minorities.
                    </FormHelperText>
                  </FormControl>
                </ListItem>

                {/* QUESTION 7 */}
                <ListItem>
                  <FormControl isRequired mb={4}>
                    <FormLabel>
                      Have you ever been convicted of any criminal offense other
                      than minor traffic violations?
                    </FormLabel>
                    <RadioGroup onChange={setConvicted} value={convicted}>
                      <VStack align="flex-start">
                        <Radio value="true" borderColor="gray.200">
                          Yes
                        </Radio>
                        <Radio value="false" borderColor="gray.200">
                          No
                        </Radio>
                      </VStack>
                    </RadioGroup>
                  </FormControl>
                </ListItem>

                {/* QUESTION 8 */}
                <ListItem>
                  <FormControl isRequired mb={4}>
                    <FormLabel>
                      By typing in my first and last name and date below, I
                      acknowledge that I have read and agree to the terms and
                      conditions of this{' '}
                      <Link
                        href="/agreement"
                        isExternal
                        color="blue"
                        textDecor="underline"
                        _hover={{ textDecor: 'none' }}
                      >
                        Volunteer Agreement
                      </Link>
                      . I certify that I am eighteen years of age or older and a
                      legal resident of the United States. BY SIGNING, I
                      ACKNOWLEDGE THAT I HAVE READ AND UNDERSTOOD ALL OF THE
                      TERMS OF THIS AGREEMENT AND THAT I AM VOLUNTARILY GIVING
                      UP LEGAL RIGHTS, INCLUDING THE RIGHT TO SUE THE
                      ORGANIZATION.
                    </FormLabel>
                    <Text color="gray.600" opacity=".5" my={2}>
                      Firstname Lastname MM-DD-YYYY
                    </Text>

                    <Input
                      type="text"
                      placeholder="Enter your full name and date"
                      _placeholder={{ opacity: 0.5, color: 'gray.600' }}
                      value={volunteerName}
                      onChange={e => setVolunteerName(e.target.value)}
                      border="1px solid"
                      borderColor="blackAlpha.300"
                    />
                  </FormControl>
                </ListItem>
              </OrderedList>

              <FormControl isRequired>
                <Checkbox borderColor="gray.200" padding={3} px={0}>
                  I certify that the information and statements contained in
                  this Volunteer Application are true. I also agree that if I am
                  accepted as a volunteer, I will abide by the terms of the
                  Reskill Americans{' '}
                  <Link
                    href="/agreement"
                    isExternal
                    color="blue"
                    textDecor="underline"
                    _hover={{ textDecor: 'none' }}
                  >
                    Volunteer Agreement
                  </Link>
                  .
                </Checkbox>
                <Checkbox borderColor="gray.200" padding={3} px={0}>
                  By submitting this Volunteer Application, I acknowledge that I
                  have reviewed and agree to Reskill America's{' '}
                  <Link
                    href="https://termsofservice.reskillamericans.org/privacy"
                    isExternal
                    color="blue"
                    textDecor="underline"
                    _hover={{ textDecor: 'none' }}
                  >
                    Privacy Policy
                  </Link>
                  .
                </Checkbox>
              </FormControl>

              <Button
                disabled={!linkedInAuth}
                colorScheme="blue"
                my={4}
                mt={6}
                w="full"
                variant="solid"
                type="submit"
                isLoading={loading}
                loadingText="Submitting"
              >
                Submit
              </Button>
              <Text fontWeight={700} fontStyle="italic" color="red">
                You must sign in with LinkedIn to submit this form.
              </Text>
            </form>
          </Box>
        </Center>
      </Flex>
    </Box>
  );
};

export default Form;
