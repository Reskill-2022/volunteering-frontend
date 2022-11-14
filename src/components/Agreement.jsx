import React from 'react';
import {
  Box,
  Flex,
  Heading,
  ListItem,
  OrderedList,
  Text,
} from '@chakra-ui/react';

const Agreement = () => {
  const OList = ({ list }) => {
    return (
      <OrderedList>
        {list?.map(({ title, desc, other }, i) => {
          return (
            <>
              <ListItem key={i} my={3}>
                <strong>{title}</strong> {desc}
              </ListItem>
              {other && <Text my={3}>{other}</Text>}
            </>
          );
        })}
      </OrderedList>
    );
  };

  const SubSection = ({ subheading, contentList, list }) => {
    return (
      <Box>
        {subheading && (
          <Heading fontSize="xl" mt={5} mb={3}>
            {subheading}
          </Heading>
        )}
        {contentList?.map((content, i) => {
          return (
            <Text key={i} mt={3} mb={4}>
              {content || 'content'}
            </Text>
          );
        })}
        {list && <OList list={list} />}
      </Box>
    );
  };

  const Section = ({
    heading,
    note,
    subheading,
    contentList,
    list,
    children,
  }) => {
    return (
      <Box mb={4}>
        <Heading fontSize="2xl" my={5}>
          {heading}
        </Heading>
        {note && (
          <Text fontStyle="italic" fontSize="sm" fontWeight={700} my={4}>
            {note}
          </Text>
        )}
        <SubSection
          subheading={subheading}
          contentList={contentList}
          list={list}
        />
        {children}
      </Box>
    );
  };

  return (
    <Box w="full">
      <Flex
        flexDir="column"
        maxW={1200}
        margin="0 auto"
        px={[6, 8]}
        py={[8, 16]}
      >
        <Heading textAlign="center" fontSize="2xl">
          VOLUNTEER PARTICIPATION AGREEMENT
        </Heading>
        <Section
          note="Last Updated: November 14th, 2022"
          contentList={[
            `Reskill Americans is pleased you are interested in volunteering your time and talent to helping historically underrepresented racial minorities across the U.S. build skills to access careers in tech.  This VOLUNTEER PARTICIPATION AGREEMENT (this "Agreement") is executed as of the date you sign below by and between you ("I" or "me") and Reskill Americans, a nonprofit organization, and its members, employees, volunteers, and agents (collectively, the "Organization").`,
            `I desire to volunteer for the Organization and engage in activities at Organization's direction (the "Activities"). I understand that the Activities may include, but are not limited to, the activities I selected on my Volunteer Application. I also understand that as a volunteer I will receive no compensation or remuneration for my services and will not be eligible for any employee benefits. I acknowledge that I am not an employee.`,
            `In exchange for being allowed to participate in the Activities as a volunteer and for other good and valuable consideration, the receipt and sufficiency of which I acknowledge, I hereby freely, voluntarily, and without duress execute this Release and agree to the following terms: `,
          ]}
          list={[
            {
              title: 'Compliance with Policies. ',
              desc: `I acknowledge and agree that I will comply with any provided Volunteer Code of Conduct or other applicable policies and procedures, training, and safety rules of the Organization, and will follow the Organization's instructions in carrying out the Activities.`,
            },
            {
              title: 'Assumption of Risk. ',
              desc: `I am aware and understand that the Activities may be inherently dangerous and may expose me to a variety of foreseen and unforeseen hazards and risks. I acknowledge that I am voluntarily participating in the Activities and have considered those risks. I hereby expressly and specifically assume such risks, including any and all risk of injury, harm, or loss that I may incur as a result of my participation in the Activities.`,
            },
            {
              title: 'Medical Treatment. ',
              desc: `I hereby give consent and authority to the Organization to obtain medical treatment on my behalf if I am injured or require medical attention during my participation in the Activities. I understand and agree that I am solely responsible for all costs related to such medical treatment, medical transportation, and/or evacuation. I hereby release, forever discharge, and hold harmless the Organization from any claim whatsoever in connection with such treatment or other medical services.`,
            },
            {
              title: 'Confidentiality. ',
              desc: `I understand that the Organization has disclosed or may disclose business, technical, financial, or personal information relating to its business, services, or products under this Agreement that is marked as confidential or would normally be considered confidential to a reasonable person under the circumstances (“Confidential Information”). I agree: (i) to take reasonable precautions to protect such Confidential Information, and (ii) not to use (except in performance of the Activities or as otherwise permitted herein) or disclose to any third party any such Confidential Information.  The Organization agrees that the foregoing shall not apply with respect to any information that I can document (a) except for personal information, is or becomes generally available to the public, (b) was in my possession or known by me prior to receipt from the Organization, (c) was rightfully disclosed to me without restriction by a third party, or (d) was independently developed by me without use of any Confidential Information of the Organization. Upon the Organization’s request or termination of this Agreement for any reason, I will return to the Organization, or destroy (with written certification of the same), all copies of the Organization's Confidential Information.`,
            },
            {
              title: 'Release and Waiver. ',
              desc: `To the extent permitted by applicable law, I hereby fully and forever release and discharge the Organization from, and expressly waive, any and all liability, claims, and demands of whatever kind or nature, either in law or in equity, that may arise from my participation in the Activities. I agree not to make or bring any such claim or demand against the Organization, and fully and forever release and discharge the Organization from liability under such claims or demands.`,
              other: `I UNDERSTAND THAT THIS RELEASE DISCHARGES THE ORGANIZATION TO THE EXTENT PERMITTED BY APPLICABLE LAW FROM ANY LIABILITY OR CLAIM THAT I MAY HAVE AGAINST THE ORGANIZATION WITH RESPECT TO ANY BODILY INJURY, PERSONAL INJURY, ILLNESS, DEATH, PROPERTY DAMAGE, OR PROPERTY LOSS THAT MAY RESULT FROM THE ACTIVITIES, WHETHER CAUSED BY THE NEGLIGENCE OF THE ORGANIZATION OR OTHERWISE.`,
            },
            {
              title: 'Insurance. ',
              desc: `I UNDERSTAND THAT, EXCEPT AS AGREED TO BY THE ORGANIZATION IN WRITING, THE ORGANIZATION DOES NOT ASSUME ANY RESPONSIBILITY FOR OR OBLIGATION TO PROVIDE FINANCIAL ASSISTANCE OR OTHER ASSISTANCE, INCLUDING BUT NOT LIMITED TO MEDICAL, HEALTH, OR DISABILITY INSURANCE OF ANY NATURE IN THE EVENT OF MY INJURY, ILLNESS, OR DEATH, OR DAMAGE TO OR LOSS OF MY PROPERTY.`,
              other: `I also understand that the Organization does not provide workers' compensation insurance for volunteers. To the extent permitted by applicable law, I expressly waive any claim for compensation or liability on the part of the Organization in the event of any injury or medical expense.`,
            },
            {
              title: 'Photographic Release. ',
              desc: `I understand and agree that during the Activities, I may be photographed and/or videotaped by the Organization for internal and/or promotional use. I hereby grant and convey to the Organization all right, title, and interest, including but not limited to, any royalties, proceeds, or other benefits, in any and all such photographs or recordings, and consent to the Organization's use of my name, image, likeness, and voice in perpetuity, in any medium or format, for any publicity without further compensation or permission.`,
            },
            {
              title: 'Miscellaneous. ',
              desc: `I understand and hereby agree that this Agreement represents the full understanding between the Organization and me and supersedes all other prior agreements, understandings, representations, and warranties, both written and oral, between us, with respect to the subject matter hereof. If any term or provision of this Agreement shall be held to be invalid by any court of competent jurisdiction, that term or provision shall be deemed modified so as to be valid and enforceable to the full extent permitted. The invalidity of any such term or provision shall not otherwise affect the validity or enforceability of the remaining terms and provisions. This Agreement is binding on and inures to the benefit of the Organization and me and our respective heirs, executors, administrators, legal representatives, successors, and permitted assigns. Section headings are for convenience of reference only and shall not define, modify, expand, or limit any of the terms of this Agreement.`,
            },
            {
              title: 'Governing Law. ',
              desc: `I hereby agree that this Agreement is intended to be as broad and inclusive as permitted. This Agreement shall be governed by and interpreted in accordance with the laws of the State of Washington, without reference to any choice of law doctrine.`,
            },
          ]}
        />
      </Flex>
    </Box>
  );
};

export default Agreement;
