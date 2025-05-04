const questions = [
  {
    question: "Which of the following bones are ossified at birth?",
    answers: [
      { text: "Lower end of femur", correct: true },
      { text: "Calcaneum", correct: false },
      { text: "Upper end of tibia", correct: false },
      { text: "Upper end of humerus", correct: false },
      { text: "Medial end of clavicle", correct: false },
    ],
  },
  {
    question: "Endochondral ossification is/are seen in:",
    answers: [
      { text: "Long bones", correct: true },
      { text: "Flat bones of skull", correct: false },
      { text: "Clavicle", correct: false },
      { text: "Mandible", correct: false },
      { text: "Sesamoid bones", correct: false },
    ],
  },
  {
    question: "Which of the following is a traction epiphysis?",
    answers: [
      { text: "Trochanter of femur", correct: true },
      { text: "Tibial condyles", correct: false },
      { text: "Head of fibula", correct: false },
      { text: "Coracoid process of scapula", correct: false },
      { text: "Head of femur", correct: false },
    ],
  },
  {
    question: "What bone easily fractured in carpals?",
    answers: [
      { text: "Scaphoid", correct: true },
      { text: "Lunate", correct: false },
      { text: "Hamatae", correct: false },
      { text: "Trapezium", correct: false },
      { text: "Capitate", correct: false },
    ],
  },
  {
    question: "Which of the following structure is not present in transpyloric plane?",
    answers: [
      { text: "Inferior mesenteric vein", correct: true },
      { text: "First lumbar vertebra", correct: false },
      { text: "Fundus of gallbladder", correct: false },
      { text: "Hilum of right kidney", correct: false },
      { text: "Neck of the pancreas", correct: false },
    ],
  },
  {
    question: "Which of the following structures does not contribute to the boundaries of the pelvic inlet?",
    answers: [
      { text: "inferior ramus of the pubis", correct: true },
      { text: "sacral promontory", correct: false },
      { text: "anterior border of the ala of the sacrum", correct: false },
      { text: "arcuate line of the ilium", correct: false },
      { text: "pecten pubis", correct: false },
    ],
  },
  {
    question: "Which of the following is not a surface marking of the oblique fissure of the lung?",
    answers: [
      { text: "6th costal cartilage", correct: true },
      { text: "T 3 vertebra", correct: false },
      { text: "5th rib", correct: false },
      { text: "7th rib", correct: false },
      { text: "T2 vertebra", correct: false },
    ],
  },
  {
    question: "Cranio-vertebral joint does not include:",
    answers: [
      { text: "Wings of sphenoid", correct: true },
      { text: "Atlas", correct: false },
      { text: "Axis", correct: false },
      { text: "All stated", correct: false },
      { text: "Basi-occiput", correct: false },
    ],
  },
  {
    question: "Which of the following structures is not pierced during an epidural lumbar puncture?",
    answers: [
      { text: "Posterior longitudinal ligament", correct: true },
      { text: "Anterior longitunal ligament", correct: false },
      { text: "Interspinous", correct: false },
      { text: "Supraspinous ligament", correct: false },
      { text: "Ligamentum flavum", correct: false },
    ],
  },
  {
    question: "Transverse ligament of atlas is part of:",
    answers: [
      { text: "Cruciform ligament", correct: true },
      { text: "Ligamenta flava", correct: false },
      { text: "Anterior longitudinal ligament", correct: false },
      { text: "Posterior longitudinal ligament", correct: false },
      { text: "Supraspinous ligament", correct: false },
    ],
  },
  {
    question: "Which of the following statements is TRUE about the medial lemniscus system?",
    answers: [
      { text: "Formed from fasciculus gracilis and cuneatus", correct: true },
      { text: "Carries discriminative touch and proprioception", correct: false },
      { text: "Convey pain and temperature", correct: false },
      { text: "Joins spinothalamic tract", correct: false },
      { text: "Formed in dorsal column tract", correct: false },
    ],
  },
  {
    question: "Which ligament attaches the pubis to the ischium and helps to stabilize the pelvis?",
    answers: [
      { text: "Pubic symphysis ligament", correct: true },
      { text: "Sacrotuberous ligament", correct: false },
      { text: " Sacrospinous ligament", correct: false },
      { text: "Inguinal ligament", correct: false },
      { text: "Round ligament", correct: false },
    ],
  },
  {
    question: "Which of the following ligament is not attached to talus?",
    answers: [
      { text: "Spring ligament", correct: true },
      { text: "Talonavicular ligament", correct: false },
      { text: "Deltoid ligament", correct: false },
      { text: "All stated", correct: false },
      { text: "Cervical ligament", correct: false },
    ],
  },
  {
    question: "Which of the following muscles does not resist downward dislocation of the glenohumeral joint while carrying a heavy suitcase?",
    answers: [
      { text: "Latissimus dorsi", correct: true },
      { text: "Deltoid", correct: false },
      { text: "Coracobrachialis", correct: false },
      { text: "Short head of biceps", correct: false },
      { text: "Pectoralis major", correct: false },
    ],
  },
  {
    question: "Which of the following is not a part of the digastric muscle?",
    answers: [
      { text: "Sternocleidomastoid", correct: true },
      { text: "Occipitofrontalis", correct: false },
      { text: "None of stated", correct: false },
      { text: "Omohyoid", correct: false },
      { text: "Muscular fibres in the ligament of Treitz", correct: false },
    ],
  },
  {
    question: "Muscle used in normal walk during stance and swing:",
    answers: [
      { text: "Tibialis anterior", correct: true },
      { text: " Iliopsoas", correct: false },
      { text: "Femoralis", correct: false },
      { text: "Tibialis anterior", correct: false },
      { text: "Gastrocnemius soleus", correct: false },
    ],
  },
  {
    question: "Smallest muscle in the body is:",
    answers: [
      { text: "Stapedius", correct: true },
      { text: "Interarytenoid", correct: false },
      { text: "Anconeus", correct: false },
      { text: "Corrugator supercilli", correct: false },
      { text: "Superior oblique", correct: false },
    ],
  },
  {
    question: "Muscles causing supination of forearm:",
    answers: [
      { text: "Biceps brachii", correct: true },
      { text: "Brachioradialis", correct: false },
      { text: "FDS", correct: false },
      { text: "Anconeus", correct: false },
      { text: "FPL", correct: false },
    ],
  },
  {
    question: "Muscle having double nerve supply:",
    answers: [
      { text: "Digastric muscle", correct: true },
      { text: "Omohyoid muscle", correct: false },
      { text: "Trapezius", correct: false },
      { text: "Adductor magnus", correct: false },
      { text: "Biceps brachi", correct: false },
    ],
  },
  {
    question: "Most common muscle to be congenitally absent is:",
    answers: [
      { text: "Pectoralis major", correct: true },
      { text: "Teres minor", correct: false },
      { text: "Semimembranosus", correct: false },
      { text: "Gastrocnemius", correct: false },
      { text: "SCM", correct: false },
    ],
  },
  {
    question: "When a heavy object in hand is lowered, the extension at the elbow is brought about by:",
    answers: [
      { text: "Active lengthening of the flexors", correct: true },
      { text: "Active shortening of the extensors.", correct: false },
      { text: "Passive shortening of the extensors", correct: false },
      { text: "Passive shortening of the flexors", correct: false },
      { text: "Active shortening of the flexors", correct: false },
    ],
  },
  {
    question: "Stomach is supplied by:",
    answers: [
      { text: "All stated", correct: true },
      { text: "Coeliac trunk", correct: false },
      { text: "Splenic artery", correct: false },
      { text: "Gastroduodenal artery", correct: false },
      { text: "Left gastric artery", correct: false },
    ],
  },
  {
    question: "Nerve of grassi branch of :",
    answers: [
      { text: "Right vagus", correct: true },
      { text: "Left vagus", correct: false },
      { text: "Trigeminal nerve", correct: false },
      { text: "Hypoglossal nerve", correct: false },
      { text: "Facial nerve", correct: false },
    ],
  },
  {
    question: "Most important blood supply to stomach is:",
    answers: [
      { text: "Left gastri artery", correct: true },
      { text: "Short gastric artery", correct: false },
      { text: "Left gastroepiploic artery", correct: false },
      { text: "Right gastroepiploic artery", correct: false },
      { text: "Proper hepatic artery", correct: false },
    ],
  },
  {
    question: "Which of the following does not form the bed of the stomach?",
    answers: [
      { text: "Liver", correct: true },
      { text: "Spleen", correct: false },
      { text: "Diaphragm", correct: false },
      { text: "Pancreas", correct: false },
      { text: "Left kidney", correct: false },
    ],
  },
  {
    question: "Length of human intestine is about:",
    answers: [
      { text: "8meter", correct: true },
      { text: "3 meter", correct: false },
      { text: "6 meter", correct: false },
      { text: "12 meter", correct: false },
      { text: "15 meter", correct: false },
    ],
  },
  {
    question: "Which of the following structure is not present in transpyloric plane?",
    answers: [
      { text: "Inferior mesenteric vein", correct: true },
      { text: "First lumbar vertebra", correct: false },
      { text: "Fundus of gallbladder", correct: false },
      { text: "Hilum of right kidney", correct: false },
      { text: "Neck of the pancreas", correct: false },
    ],
  },
  {
    question: "Structures injured while resecting the free edge of lesser omentum:",
    answers: [
      { text: "Hepatic artery proper", correct: true },
      { text: "Cystyc duct", correct: false },
      { text: "Portal vein", correct: false },
      { text: "Hepativc vein", correct: false },
      { text: "Left gastric artery", correct: false },
    ],
  },
  {
    question: "Which of the following is not found in the lesser omentum?",
    answers: [
      { text: "Hepatic vein", correct: true },
      { text: "Hepatic artery", correct: false },
      { text: "Portal vein", correct: false },
      { text: "Bile duct", correct: false },
      { text: "Lymph vessels", correct: false },
    ],
  },
  {
    question: "A hemangioma was found on the left of the falciform ligamement of the liver.Surgeon dissecting Couinaud's segment of liver to the left of attchment of falciform ligament resects which lobe:",
    answers: [
      { text: "2.3", correct: true },
      { text: "1,4b", correct: false },
      { text: "2,4a", correct: false },
      { text: "1,4a", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which chamber of the heart receives oxygen-rich blood from the lungs?",
    answers: [
      { text: "Left atrium", correct: true },
      { text: "Right atrium", correct: false },
      { text: "None of stated", correct: false },
      { text: "Right ventricle", correct: false },
      { text: "Left ventricle", correct: false },
    ],
  },
  {
    question: "What is the valve between the left atrium and left ventricle called?",
    answers: [
      { text: "Mitral valve", correct: true },
      { text: "Tricuspid valve", correct: false },
      { text: "Pulmonary valve", correct: false },
      { text: "None of stated", correct: false },
      { text: "Aortic valve", correct: false },
    ],
  },
  {
    question: " Which vessel carries deoxygenated blood from the body to the right atrium?",
    answers: [
      { text: "Inferior vena cava", correct: true },
      { text: "Aorta", correct: false },
      { text: "Pulmonary artery", correct: false },
      { text: "Pulmonary vein", correct: false },
      { text: "None of stated", correct: false },
    ],
  },
  {
    question: "What is the largest artery in the human body?",
    answers: [
      { text: "Aorta", correct: true },
      { text: "Pulmonary artery", correct: false },
      { text: "None of stated", correct: false },
      { text: "Brachiocephalic artery", correct: false },
      { text: "Carotid artery", correct: false },
    ],
  },
  {
    question: "The SA node is also known as the:",
    answers: [
      { text: "Pacemaker of the heart", correct: true },
      { text: "Ventricular node", correct: false },
      { text: "Bundle of His", correct: false },
      { text: "Purkinje fibers", correct: false },
      { text: "None of stated", correct: false },
    ],
  },
  {
    question: "Which artery supplies the posterior aspect of the interventricular septum?",
    answers: [
      { text: "Posterior descending artery", correct: true },
      { text: "Left anterior descending artery", correct: false },
      { text: "Circumflex artery", correct: false },
      { text: "Right coronary artery", correct: false },
      { text: "Left main coronary artery", correct: false },
    ],
  },
  {
    question: "What is the role of the fossa ovalis in fetal circulation?",
    answers: [
      { text: "It serves as an opening between the right and left atria.", correct: true },
      { text: "It regulates blood flow into the pulmonary trunk.", correct: false },
      { text: "It facilitates gas exchange in the placenta.", correct: false },
      { text: "It prevents backflow of blood into the right atrium.", correct: false },
      { text: "It anchors the tricuspid valve.", correct: false },
    ],
  },
  {
    question: "What is the function of the papillary muscles in the heart?",
    answers: [
      { text: "To anchor the atrioventricular valves via chordae tendineae", correct: true },
      { text: "To regulate blood pressure within the ventricles", correct: false },
      { text: "To prevent backflow of blood into the atria", correct: false },
      { text: "To regulate the flow of blood into the pulmonary and systemic circulations", correct: false },
      { text: "To initiate the heartbeat", correct: false },
    ],
  },
  {
    question: "Which artery, branching from the external carotid artery, travels through the parotid gland and supplies the structures of the face and scalp?",
    answers: [
      { text: "Facial artery", correct: true },
      { text: "Occipital artery", correct: false },
      { text: "Lingual artery", correct: false },
      { text: "Maxillary artery", correct: false },
      { text: "Superficial temporal artery", correct: false },
    ],
  },
  {
    question: "In cases of portal hypertension, which veins are commonly affected by increased pressure?",
    answers: [
      { text: "Gastric veins", correct: true },
      { text: " Inferior vena cava", correct: false },
      { text: "Renal veins", correct: false },
      { text: "Azygos veins", correct: false },
      { text: "Hepatic veins", correct: false },
    ],
  },
  {
    question: "At which level does the subarachnoid space extend from the brain to the spinal cord?",
    answers: [
      { text: "S2", correct: true },
      { text: "T12", correct: false },
      { text: "L1", correct: false },
      { text: "L2", correct: false },
      { text: "L3", correct: false },
    ],
  },
  {
    question: "Spinal cord develops from:",
    answers: [
      { text: "Neural tube", correct: true },
      { text: "Mesencephalon", correct: false },
      { text: "Rhombencephalon", correct: false },
      { text: "Prosencephalon", correct: false },
      { text: "Diencephalon", correct: false },
    ],
  },
  {
    question: "TRUE about cerebrospinal fluid is:",
    answers: [
      { text: "Produced by choroid plexus", correct: true },
      { text: "Travels from sub-arachnoid space to the fourth ventricle", correct: false },
      { text: "Absorbed by arachnoid villi", correct: false },
      { text: "Drains into the dural venous sinuses", correct: false },
      { text: "All stated", correct: false },
    ],
  },
  {
    question: "Corpora quadrigemina is present in:",
    answers: [
      { text: "Midbrain", correct: true },
      { text: "Upper pons", correct: false },
      { text: "Lower pons", correct: false },
      { text: "Medulla", correct: false },
      { text: "Interpeduncular fossa", correct: false },
    ],
  },
  {
    question: "Lateral ventricle is connected in third ventricle by:",
    answers: [
      { text: "Foramen of Monro", correct: true },
      { text: "Foramen of Luschka", correct: false },
      { text: "Foramen of Magendie", correct: false },
      { text: "Median foramen", correct: false },
      { text: "Aqueduct of Sylvius", correct: false },
    ],
  },
  {
    question: "Which of the following tracts is seen in the posterior column of spinal cord?",
    answers: [
      { text: "Vagal triangle", correct: true },
      { text: "Lateral", correct: false },
      { text: "Rubrospinal tract", correct: false },
      { text: "Fasciculus", correct: false },
      { text: "Rubrospinal tract", correct: false },
    ],
  },
  {
    question: "Which of the following is not carried by posterior column tract?",
    answers: [
      { text: "Temperature", correct: true },
      { text: "Position sense", correct: false },
      { text: "Pyramidal tract", correct: false },
      { text: "Pressure", correct: false },
      { text: "Vibration", correct: false },
    ],
  },
  {
    question: "Which of the following brainstem nuclei is not derived from the alar plate?",
    answers: [
      { text: "Hypoglossal", correct: true },
      { text: "Dentate", correct: false },
      { text: "Inferior olivary", correct: false },
      { text: "Vagal", correct: false },
      { text: "Substantia nigra", correct: false },
    ],
  },
  {
    question: "The retina is an outgrowth of the:",
    answers: [
      { text: "Diencephalon", correct: true },
      { text: "Mesencephalon", correct: false },
      { text: "Medulla", correct: false },
      { text: "Telencephalon", correct: false },
      { text: "Pons", correct: false },
    ],
  },
  {
    question: "First commissure is develop:",
    answers: [
      { text: "Anterior commissure", correct: true },
      { text: "Corpus callosum", correct: false },
      { text: "Pons", correct: false },
      { text: "Hippocampus", correct: false },
      { text: "None of stated", correct: false },
    ],
  },
  {
    question: "Neural tube begin to close from which region?",
    answers: [
      { text: "Cervical", correct: true },
      { text: "Cranial", correct: false },
      { text: "Sacral", correct: false },
      { text: "Thoracic", correct: false },
      { text: "Lumbar", correct: false },
    ],
  },
  {
    question: "Which cranial nerve does not supply the dura mater?",
    answers: [
      { text: "4", correct: true },
      { text: "12", correct: false },
      { text: "10", correct: false },
      { text: "5", correct: false },
      { text: "7", correct: false },
    ],
  },
  {
    question: "Cranial nerve related to apex of the petrous temporal bone?",
    answers: [
      { text: "VI", correct: true },
      { text: "IX", correct: false },
      { text: "VIII", correct: false },
      { text: "VII", correct: false },
      { text: "all correct", correct: false },
    ],
  },
  {
    question: "Which of the following is not supplied by the anterior ethmoidal nerve?",
    answers: [
      { text: "Maxillary sinus lining", correct: true },
      { text: "Dura mater in anterior cranial fossa", correct: false },
      { text: "Ethmoidal air cells", correct: false },
      { text: "Internal nasal cavity", correct: false },
      { text: "all correct", correct: false },
    ],
  },
  {
    question: "Which nerve is not related to humerus:",
    answers: [
      { text: "Musculocutaneous", correct: true },
      { text: "Axillary", correct: false },
      { text: "Radial", correct: false },
      { text: "Median", correct: false },
      { text: "Ulnar", correct: false },
    ],
  },
  {
    question: "Nerve supply of scalp:",
    answers: [
      { text: "Auriculotemporal nerve", correct: true },
      { text: "Zygomatic nerve", correct: false },
      { text: "Occipital nerve", correct: false },
      { text: "Supratrochlear nerve", correct: false },
      { text: "Ansa cervicalis", correct: false },
    ],
  },
  {
    question: "Which is not supplied by pelvic splanchnic nerves",
    answers: [
      { text: "Appendix", correct: true },
      { text: "Rectum", correct: false },
      { text: "Urinary bladder", correct: false },
      { text: "Fallopian tubes", correct: false },
      { text: "Uterus", correct: false },
    ],
  },
  {
    question: "The obturator nerve arises from which of the following spinal segments?",
    answers: [
      { text: "L3-L4", correct: true },
      { text: " L1-L2", correct: false },
      { text: "L2-L3", correct: false },
      { text: "T12-L1", correct: false },
      { text: "S2-S4", correct: false },
    ],
  },
  {
    question: "Nerve of 6th arch is:",
    answers: [
      { text: "Vagus", correct: true },
      { text: "Trigeminal", correct: false },
      { text: "Facial", correct: false },
      { text: "Glossopharyngeal", correct: false },
      { text: "optic", correct: false },
    ],
  },
  {
    question: "Optic nerve is which order neuron:",
    answers: [
      { text: "Third", correct: true },
      { text: "First", correct: false },
      { text: "Second", correct: false },
      { text: "Fifth ", correct: false },
      { text: "Fourth", correct: false },
    ],
  },
  {
    question: "After surgery on right side of neck, a person could not raise his arm above head and also could not shrug the shoulder. What is the possible cause?",
    answers: [
      { text: "Damage to spinal accessory nerve", correct: true },
      { text: "Paralysis of trapezius muscle", correct: false },
      { text: "Injury to axillary nerve", correct: false },
      { text: "Paralysis of latissimus dorsi", correct: false },
      { text: "Injury to suprascapular nerve", correct: false },
    ],
  },
  {
    question: "The hollow space in the middle of bones is filled with ?",
    answers: [
      { text: "Bone marrow", correct: true },
      { text: "Air", correct: false },
      { text: "Blood", correct: false },
      { text: "Bone cells", correct: false },
      { text: "All stated", correct: false },
    ],
  },
  {
    question: "Which interleukin (IL) is vital as a hematopoietic growth factor for bone marrow ?",
    answers: [
      { text: "IL-7", correct: true },
      { text: "IL-2", correct: false },
      { text: "All stated", correct: false },
      { text: "IL-5", correct: false },
      { text: "IL-12", correct: false },
    ],
  },
  {
    question: "Which of the following is true about the bone marrow?",
    answers: [
      { text: "All stated", correct: true },
      { text: "Soft, loose, vascular tissue consisting of delicate network of reticular fibers & cells", correct: false },
      { text: "Main site of hemopoiesis", correct: false },
      { text: "Present in medullary cavity of long bones & in the cavities of spongy bone", correct: false },
      { text: "A and B", correct: false },
    ],
  },
  {
    question: "Which of the following is true about red bone marrow?",
    answers: [
      { text: "All stated", correct: true },
      { text: "Vascular and appears red in color", correct: false },
      { text: "Appearance of red color is due to presence of red blood cells", correct: false },
      { text: "Consists of network of fine reticular fibers containing blood forming cells", correct: false },
      { text: "B and C", correct: false },
    ],
  },
  {
    question: "The part of the bone where blood cells are made ?",
    answers: [
      { text: "Bone Marrow", correct: true },
      { text: "Joint", correct: false },
      { text: "Ligament", correct: false },
      { text: "Tendons", correct: false },
      { text: "All stated", correct: false },
    ],
  },
  {
    question: "A histopathologist reviews a cardiac muscle under a microscope. While viewing, which of the following morphological feature of cardiac myocytes can be appreciated?",
    answers: [
      { text: " Intercalated discs", correct: true },
      { text: "Extracellular matrix", correct: false },
      { text: "Fibroblasts", correct: false },
      { text: "Actin myosin filaments", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Most hard connective tissue present in body are called?",
    answers: [
      { text: "Bones", correct: true },
      { text: "Lymphocytes", correct: false },
      { text: "C and D", correct: false },
      { text: "Cartilages", correct: false },
      { text: "Collagens", correct: false },
    ],
  },
  {
    question: "What is the term for the inner part of a bone that is porous and soft in nature?",
    answers: [
      { text: "Spongy bones", correct: true },
      { text: "Compact bones", correct: false },
      { text: "Connecting bones", correct: false },
      { text: "Protective bones", correct: false },
      { text: "All stated", correct: false },
    ],
  },
  {
    question: "Which of the following correctly describes the first step of ossification that takes place in the long bones of the skeleton?",
    answers: [
      { text: "Mesenchymal cells differentiate into chondrocytes", correct: true },
      { text: "Undifferentiated mesenchymal cells differentiate into osteoblasts", correct: false },
      { text: "Blood vessels carry in osteogenic cells to the cartilage template of bone", correct: false },
      { text: "Osteoblasts form from osteochondroprogenitor cells that express CBFAI", correct: false },
      { text: "A,B", correct: false },
    ],
  },
  {
    question: "Which type of cartilage is characterized by the presence of thick bundles of collagen fibers ?",
    answers: [
      { text: "Fibrocartilage", correct: true },
      { text: "Hyaline cartilage", correct: false },
      { text: "Elastic cartilage ", correct: false },
      { text: "All stated", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is not true regarding elastic cartilage?",
    answers: [
      { text: "Is adapted to withstand tension and compression", correct: true },
      { text: "Has abundant elastic fibers in its matrix ", correct: false },
      { text: "Is found in external auditory canal", correct: false },
      { text: "Has yellowish appearance ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following structures does not contribute to the formation of the neural tube?",
    answers: [
      { text: "Endoderm", correct: true },
      { text: "Neural crest cells", correct: false },
      { text: "Mesoderm", correct: false },
      { text: "Notochord", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The upper lip develops from all of the following processes, with one process not contributing to its formation. Which is that process?",
    answers: [
      { text: "Lateral nasal processes", correct: true },
      { text: "Frontonasal process", correct: false },
      { text: "Medial nasal processes", correct: false },
      { text: "Maxillary processes", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The facial skeleton develops from which of the following?",
    answers: [
      { text: "Neural crest", correct: true },
      { text: "Paraxial mesoderm", correct: false },
      { text: "Intermediate mesoderm", correct: false },
      { text: "Lateral plate mesoderm", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "At the end of 5th week of gestation, how many number of somites can be seen?",
    answers: [
      { text: "44", correct: true },
      { text: "24", correct: false },
      { text: "26", correct: false },
      { text: "38", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following blood vessels is not surrounded by smooth muscle cells ?",
    answers: [
      { text: "Capillaries", correct: true },
      { text: "Veins", correct: false },
      { text: "Arteries", correct: false },
      { text: "Arterioles", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A group of researchers analyzed various microvascular anatomy from different organs and tissues. They observed that in most of the tissues arteriole branches into capillaries and is subsequently collected into small venules. In which of the following organs does the arteriole bypass the capillary-bed?",
    answers: [
      { text: "Skin", correct: true },
      { text: "Heart", correct: false },
      { text: "Cerebrum", correct: false },
      { text: "Intestine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "At which stage of intrauterine life is the heart fully developed?",
    answers: [
      { text: "3rd month", correct: true },
      { text: "4th month", correct: false },
      { text: "5th month", correct: false },
      { text: "6th month", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which cells are found in Hassall corpuscles of the thymus?",
    answers: [
      { text: "Degenerating epithelial reticular cells", correct: true },
      { text: "Degenerating neutrophils", correct: false },
      { text: "Degenerating T-lymphocytes", correct: false },
      { text: "Degenerating macrophages", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is the function of the blood thymus barrier?",
    answers: [
      { text: "It prevents circulating antigens from reaching T-cells that are developing", correct: true },
      { text: "It provides nutrition to the thymus from the blood", correct: false },
      { text: "It regulates arterial flow to the thymus", correct: false },
      { text: "It keeps T-cell from entering the blood stream", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following hormones is produced by the thymus gland?",
    answers: [
      { text: "Thymosin", correct: true },
      { text: "Insulin", correct: false },
      { text: "Thyroxine", correct: false },
      { text: "Cortisol", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Desmosomes are primarily involved in connecting which of the following?",
    answers: [
      { text: "Keratinocytes", correct: true },
      { text: "Melanocytes", correct: false },
      { text: "Epidermis and dermis", correct: false },
      { text: "Langerhans cells", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "In which layer of the skin are melanocytes primarily found?",
    answers: [
      { text: "Stratum basale", correct: true },
      { text: "Stratum spinosum", correct: false },
      { text: "Stratum granulosum", correct: false },
      { text: "Stratum corneum", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 12-year-old boy presents to the emergency room with several scrapes and cuts after falling off of his bicycle. There are minor scrapes on both his palms, but a gash on his right knee that requires suturing and a deep wound on his lateral right forearm. Which of the following skin layers is responsible for providing extra protection for the palms? ",
    answers: [
      { text: "Stratum lucidum", correct: true },
      { text: "Stratum corneum", correct: false },
      { text: "Stratum spinosum", correct: false },
      { text: "Stratum granulosum", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What type of epithelium lines the area near the superior nasal concha?",
    answers: [
      { text: "Olfactory epithelium", correct: true },
      { text: "Pseudostratified columnar", correct: false },
      { text: "Pseudostratified ciliated columnar", correct: false },
      { text: "Respiratory mucosa", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What type of cartilage forms the epiglottis?",
    answers: [
      { text: "Elastic cartilage", correct: true },
      { text: "Fibro cartilage", correct: false },
      { text: "None of stated", correct: false },
      { text: "Hyaline cartiage", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "There are five identified cell types of taste buds, which is the receptor type for the cell type responsible for transducing the bitter taste? ",
    answers: [
      { text: "G protein-coupled taste receptors", correct: true },
      { text: "It has not been discovered yet", correct: false },
      { text: "Serotonin receptor", correct: false },
      { text: "GABA receptor", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Taste bud papillae develop at which gestational age?",
    answers: [
      { text: "10-13 weeks", correct: true },
      { text: "7 weeks", correct: false },
      { text: "From 20 weeks onwards", correct: false },
      { text: "11-15 weeks", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Chief Cells are found in:",
    answers: [
      { text: "Fundus", correct: true },
      { text: "Pit", correct: false },
      { text: "Neck", correct: false },
      { text: "Body", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "In which of the following organs are sinusoids not found?",
    answers: [
      { text: "Kidney", correct: true },
      { text: "Liver", correct: false },
      { text: "Spleen", correct: false },
      { text: "Lymph nodes", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which cells line the collecting ducts?",
    answers: [
      { text: "Simple columnar", correct: true },
      { text: "Simple cuboidal", correct: false },
      { text: "Simple squamous", correct: false },
      { text: "Transitional", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Duct of Bellini are present in:",
    answers: [
      { text: "Kidney", correct: true },
      { text: "Liver", correct: false },
      { text: "Spleen", correct: false },
      { text: "Lung", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Spermatozoa are transported from the seminiferous tubules to the rete testis through which structure?",
    answers: [
      { text: "Tubuli recti", correct: true },
      { text: "Ductus epididymis", correct: false },
      { text: "Ductus deferens", correct: false },
      { text: "Ductuli efferentes", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The secretion of the seminal vesicle is rich in which of the following?",
    answers: [
      { text: "Fructose", correct: true },
      { text: "Citric acid", correct: false },
      { text: "Acid phosphatase", correct: false },
      { text: "Fibrinolysin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Corpora amylacea is seen in:",
    answers: [
      { text: "Prostate", correct: true },
      { text: "Seminal vesicle", correct: false },
      { text: "Thymus", correct: false },
      { text: "Testis", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following statements concerning the vaginal mucosa is true? ",
    answers: [
      { text: "It is lubricated by glands in the cervix", correct: true },
      { text: "It is lined by stratified columnar epithelium", correct: false },
      { text: "It is lined by stratified squamous keratinized epithelium", correct: false },
      { text: "It possesses no elastic fibers", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "In which brain structure is the cerebral aqueduct formed?",
    answers: [
      { text: "Mesencephalon", correct: true },
      { text: "Diencephalon", correct: false },
      { text: "Myelencephalon", correct: false },
      { text: "Metencephalon", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which combination of position, plate, and type of neuron in the spinal cord is correct? ",
    answers: [
      { text: "Ventral, basal, motor", correct: true },
      { text: "Ventral, alar, sensory", correct: false },
      { text: "Dorsal, alar, motor", correct: false },
      { text: "Ventral, basal, sensory", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which type of neurons interpret sensory information and stimulate motor neurons?",
    answers: [
      { text: "Inter neurons ", correct: true },
      { text: "Sensory neurons", correct: false },
      { text: "Motor neurons ", correct: false },
      { text: "Rotator neurons", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Traction epiphysis is/are:",
    answers: [
      { text: "Lesser tubercle", correct: true },
      { text: "Head of humerus", correct: false },
      { text: "Deltoid tuberosity", correct: false },
      { text: "Coracoid process", correct: false },
      { text: "Radial tuberosity", correct: false },
    ],
  },
  {
    question: "Which of the following is aberrant epiphysis?",
    answers: [
      { text: "Base of 2nd metacarpal", correct: true },
      { text: "Coracoid process", correct: false },
      { text: "Greater tubercle of humerus", correct: false },
      { text: "Base of 1st metacarpal", correct: false },
      { text: "Neck of femur", correct: false },
    ],
  },
  {
    question: "The mastoid process is classified as which type of epiphysis?",
    answers: [
      { text: "Traction", correct: true },
      { text: "Pressure", correct: false },
      { text: "Aberrant", correct: false },
      { text: "Atavistic", correct: false },
      { text: "None of stated", correct: false },
    ],
  },
  {
    question: "Which bony landmark on the pelvis is commonly used to determine the fetal head position during childbirth?",
    answers: [
      { text: " Ischial spine", correct: true },
      { text: "Acetabulum", correct: false },
      { text: "Pubic symphysis", correct: false },
      { text: "Sacral promontory", correct: false },
      { text: " Iliac crest", correct: false },
    ],
  },
  {
    question: "Which bone in the pelvis is the largest and supports the weight of the body when sitting?",
    answers: [
      { text: " Ilium", correct: true },
      { text: "Ischium", correct: false },
      { text: "Pubis", correct: false },
      { text: "Sacrum", correct: false },
      { text: "Coccyx", correct: false },
    ],
  },
  {
    question: "Which bone in the pelvis forms the posterior part of the acetabulum?",
    answers: [
      { text: " Ischium", correct: true },
      { text: " Ilium", correct: false },
      { text: "Pubis", correct: false },
      { text: "Sacrum", correct: false },
      { text: "Coccyx", correct: false },
    ],
  },
  {
    question: "Which of the following bones forms the anterior border of the obturator foramen?",
    answers: [
      { text: "Pubis", correct: true },
      { text: " Ilium", correct: false },
      { text: "Ischium", correct: false },
      { text: "Coccyx", correct: false },
      { text: "None of stated", correct: false },
    ],
  },
  {
    question: "Cranio-vertebral joint does not include:",
    answers: [
      { text: "Wings of sphenoid", correct: true },
      { text: "Atlas", correct: false },
      { text: "Axis", correct: false },
      { text: "Basi-occiput", correct: false },
      { text: "All stated", correct: false },
    ],
  },
  {
    question: "Which of the following structures is classified as a syndesmosis joint?",
    answers: [
      { text: "Synostosis", correct: true },
      { text: "Distal tibiofibular joint", correct: false },
      { text: "Elbow joint", correct: false },
      { text: "Shoulder joint", correct: false },
      { text: "Sutures of the skull", correct: false },
    ],
  },
  {
    question: "The articular surface of the sacrum extends up to which vertebra in males?",
    answers: [
      { text: "3 to 3 1/2", correct: true },
      { text: " 1 to 1 1/2", correct: false },
      { text: "2 to 2 1/2", correct: false },
      { text: "4 to 4 1/2", correct: false },
      { text: "4 to 4 1/3", correct: false },
    ],
  },
  {
    question: "Which ligament supports the talus?",
    answers: [
      { text: "Spring ligament", correct: true },
      { text: "Deltoid ligament", correct: false },
      { text: "Talonavicular ligament", correct: false },
      { text: "Cervical ligament", correct: false },
      { text: "B,C.", correct: false },
    ],
  },
  {
    question: "The oblique popliteal ligament attaches to which structures?",
    answers: [
      { text: "Semimembranosus", correct: true },
      { text: "Semitendinosus", correct: false },
      { text: "Adductor magnus", correct: false },
      { text: "Sartorius", correct: false },
      { text: "Vastus medialis", correct: false },
    ],
  },
  {
    question: "The type of joint between the sacrum and the coccyx is a:",
    answers: [
      { text: "Symphysis", correct: true },
      { text: "Synostosis", correct: false },
      { text: "Synchondrosis", correct: false },
      { text: "Syndesmosis", correct: false },
      { text: "None of stated", correct: false },
    ],
  },
  {
    question: "A person is able to abduct his arm, internally rotate it, place the back of hand on the lumbosacral joint, but is not able to lift it from back. What is the etiology?",
    answers: [
      { text: "Subscapularis tendon tear", correct: true },
      { text: "Teres major tendon tear", correct: false },
      { text: "Long head of biceps tendon tear", correct: false },
      { text: "Acromioclavicular joint dislocation", correct: false },
      { text: "Shoulder joint dislocation", correct: false },
    ],
  },
  {
    question: "Which of the following is not classified as a composite muscle?",
    answers: [
      { text: "Rectus femoris", correct: true },
      { text: "Pectineus", correct: false },
      { text: "Adductor magnus", correct: false },
      { text: "Biceps femoris", correct: false },
      { text: "Flexor digitorum profundus", correct: false },
    ],
  },
  {
    question: "Which of the following is not a digastric muscle?",
    answers: [
      { text: "Sternocleidomastoid", correct: true },
      { text: "Occipitofrontalis", correct: false },
      { text: "Omohyoid", correct: false },
      { text: "Muscular fibres in the ligament of Treitz", correct: false },
      { text: "None of stated", correct: false },
    ],
  },
  {
    question: "Which of the following is multipennate muscle?",
    answers: [
      { text: "Deltoid", correct: true },
      { text: "FPL", correct: false },
      { text: "EPL", correct: false },
      { text: "FHL", correct: false },
      { text: "None of stated", correct: false },
    ],
  },
  {
    question: "Multi-unit smooth muscle is not present in which of the following?",
    answers: [
      { text: "Gut", correct: true },
      { text: "Blood vessels", correct: false },
      { text: "Iris", correct: false },
      { text: "Ductus deferens", correct: false },
      { text: "All stated", correct: false },
    ],
  },
  {
    question: "Single unit smooth muscles are seen in:",
    answers: [
      { text: "Ureter", correct: true },
      { text: "Iris", correct: false },
      { text: "Ductus deferens", correct: false },
      { text: "Trachea", correct: false },
      { text: "None of stated", correct: false },
    ],
  },
  {
    question: "Which of the following is not a muscle with parallel fibers?",
    answers: [
      { text: "Tibialis anterior", correct: true },
      { text: "Sartorius", correct: false },
      { text: "Rectus abdominis", correct: false },
      { text: "Sternohyoid", correct: false },
      { text: "All stated", correct: false },
    ],
  },
  {
    question: "A patient arrives in the emergency room after having attempted suicide by lacerating his wrist. No major artery was damaged, but the nerve that is immediately lateral to the flexor digitorum superficialis tendon is cut. Which of the following actions will no longer be possible?",
    answers: [
      { text: "Opposition of the thumb", correct: true },
      { text: "Abduction of the second digit", correct: false },
      { text: "Adduction of the second digit", correct: false },
      { text: "Flexion at the interphalangeal joint of the thumb", correct: false },
      { text: "None of stated", correct: false },
    ],
  },
  {
    question: "Minor duodenal papilla is opening of:",
    answers: [
      { text: "Accesory pancreatic duct", correct: true },
      { text: "Hepatic duct", correct: false },
      { text: "Hepatopancreatic ampulla", correct: false },
      { text: "Bile duct", correct: false },
      { text: "Main pancreatic duct", correct: false },
    ],
  },
  {
    question: "Maximum mucosa associated lymphoid tissue is seen in:",
    answers: [
      { text: "Ileum", correct: true },
      { text: "Stomach", correct: false },
      { text: "Duodenum", correct: false },
      { text: "Jejunum", correct: false },
      { text: "Colon", correct: false },
    ],
  },
  {
    question: "Major artery supply to stomach is by which branch of celiac trunk:",
    answers: [
      { text: "Left gastric artery", correct: true },
      { text: "Short gastric artery", correct: false },
      { text: "Right gastroepiploic artery", correct: false },
      { text: "Left gastroepiploic artery", correct: false },
      { text: "Cystic artery", correct: false },
    ],
  },
  {
    question: "The arterial supply of the duodenum is provided by which arteries?",
    answers: [
      { text: "Both superior mesenteric and celiac arteries", correct: true },
      { text: "Celiac artery", correct: false },
      { text: "Superior mesenteric artery", correct: false },
      { text: "Inferior mesenteric artery", correct: false },
      { text: "Splenic artery", correct: false },
    ],
  },
  {
    question: "Which of the following is related to third part of duodenum:",
    answers: [
      { text: "Superior mesenteric vein ", correct: true },
      { text: "Portal vein ", correct: false },
      { text: "Head of pancreas", correct: false },
      { text: "Hepatic artery", correct: false },
      { text: "Splenic artery", correct: false },
    ],
  },
  {
    question: "Which of the following is not a boundary of the epiploic foramen?",
    answers: [
      { text: "Quadrate lobe of liver", correct: true },
      { text: "Free margin of lesser omentum", correct: false },
      { text: "Inferior vena cava", correct: false },
      { text: "Right adrenal", correct: false },
      { text: "Caudate lobe of liver", correct: false },
    ],
  },
  {
    question: "Which of the following is TRUE about location of omental bursa:",
    answers: [
      { text: "Left subhepatic", correct: true },
      { text: "Left subphrenic", correct: false },
      { text: "Right subphrenic", correct: false },
      { text: "Left subhepatic", correct: false },
      { text: "Laterally spleen", correct: false },
    ],
  },
  {
    question: "Which of the following structures is primarily supplied by the splenic artery?",
    answers: [
      { text: "Duodenum", correct: true },
      { text: "Left colic flexure", correct: false },
      { text: "Stomach (fundus and body)", correct: false },
      { text: "Pancreas (head and neck)", correct: false },
      { text: "Jejunum", correct: false },
    ],
  },
  {
    question: "A segmental resection was performed removing part of liver lying left of the falciform ligament.The segments still retained in the left surgical liver are:",
    answers: [
      { text: "1.4", correct: true },
      { text: "2.3", correct: false },
      { text: "2.4", correct: false },
      { text: "1,4,5", correct: false },
      { text: "2.5", correct: false },
    ],
  },
  {
    question: "Which chamber of the heart pumps blood to the systemic circulation?",
    answers: [
      { text: "Left ventricle", correct: true },
      { text: "Right atrium", correct: false },
      { text: "Right ventricle", correct: false },
      { text: "Left atrium", correct: false },
      { text: "Atria", correct: false },
    ],
  },
  {
    question: "Which vessel carries oxygenated blood from the lungs to the heart?",
    answers: [
      { text: "Pulmonary vein", correct: true },
      { text: "Pulmonary artery", correct: false },
      { text: "Aorta", correct: false },
      { text: "Superior vena cava", correct: false },
      { text: "Inferior vena cava", correct: false },
    ],
  },
  {
    question: "The first branches of the aorta are which of the following?",
    answers: [
      { text: "Coronary arteries", correct: true },
      { text: "Common carotid arteries", correct: false },
      { text: "Brachiocephalic trunk", correct: false },
      { text: "Subclavian arteries", correct: false },
      { text: "Pulmonary arteries", correct: false },
    ],
  },
  {
    question: "The sigmoid sinus drains into which of the following veins?",
    answers: [
      { text: "Internal jugular vein", correct: true },
      { text: "External jugular vein", correct: false },
      { text: "Brachiocephalic vein", correct: false },
      { text: "Subclavian vein", correct: false },
      { text: "Vertebral vein", correct: false },
    ],
  },
  {
    question: "Which vein drains the scalp and communicates with the posterior auricular vein?",
    answers: [
      { text: "Occipital vein", correct: true },
      { text: "Ophthalmic vein", correct: false },
      { text: "Angular vein", correct: false },
      { text: "Facial vein", correct: false },
      { text: "Vertebral vein", correct: false },
    ],
  },
  {
    question: "Which structure connects the internal carotid artery with the basilar artery, forming an important anastomosis at the base of the brain?",
    answers: [
      { text: "Circle of Willis", correct: true },
      { text: "Vertebral artery", correct: false },
      { text: "Occipital artery", correct: false },
      { text: "Cerebral aqueduct", correct: false },
      { text: "Anterior communicating artery", correct: false },
    ],
  },
  {
    question: "Which artery, arising from the external carotid artery, supplies the temporalis muscle and gives rise to the middle meningeal artery?",
    answers: [
      { text: "Superficial temporal artery", correct: true },
      { text: "Maxillary artery", correct: false },
      { text: "Occipital artery", correct: false },
      { text: "Lingual artery", correct: false },
      { text: "Facial artery", correct: false },
    ],
  },
  {
    question: "The cavernous sinus is located on either side of which structure?",
    answers: [
      { text: "Sella turcica", correct: true },
      { text: "Diploe", correct: false },
      { text: "Optic chiasm", correct: false },
      { text: "Cerebellum", correct: false },
      { text: "Pons", correct: false },
    ],
  },
  {
    question: "Diploic veins are found in which part of the skull?",
    answers: [
      { text: "Diploe", correct: true },
      { text: "Endosteum", correct: false },
      { text: "Periosteum", correct: false },
      { text: "Dura mater", correct: false },
      { text: "Pia mater", correct: false },
    ],
  },
  {
    question: "Which artery is commonly used as a site for blood pressure measurement in the upper limb?",
    answers: [
      { text: "Brachial artery", correct: true },
      { text: "Radial artery", correct: false },
      { text: "Ulnar artery", correct: false },
      { text: "Subclavian artery", correct: false },
      { text: "Axillary artery", correct: false },
    ],
  },
  {
    question: "Foramen of Magendie is the central opening of:",
    answers: [
      { text: "4th ventricle", correct: true },
      { text: "Lateral ventricle", correct: false },
      { text: "3rd ventricle", correct: false },
      { text: "None of stated", correct: false },
      { text: "Central canal", correct: false },
    ],
  },
  {
    question: "Facial colliculus located at:",
    answers: [
      { text: "Pons", correct: true },
      { text: "Medulla", correct: false },
      { text: "Midbrain", correct: false },
      { text: "Interpeduncular fossa", correct: false },
      { text: "Floor of 4th ventricle", correct: false },
    ],
  },
  {
    question: "Speech in words and not in sentence occurs due to the lesion of:",
    answers: [
      { text: "Broca’s motor speech area", correct: true },
      { text: "Wernicke", correct: false },
      { text: "Arcuate fasciculus", correct: false },
      { text: "Primary auditory area", correct: false },
      { text: "Primary sensory cortex", correct: false },
    ],
  },
  {
    question: "In adults, the spinal cord normally ends at",
    answers: [
      { text: "Lower border of L1", correct: true },
      { text: "Lower border of L3", correct: false },
      { text: "Lower border of S1", correct: false },
      { text: "Lower border of L5", correct: false },
      { text: "Lower border of L4", correct: false },
    ],
  },
  {
    question: "In infants, the spinal cord ends at the level of which vertebra?",
    answers: [
      { text: "L3", correct: true },
      { text: "L2", correct: false },
      { text: "L1", correct: false },
      { text: "L4", correct: false },
      { text: "L5", correct: false },
    ],
  },
  {
    question: "Pineal gland forms:",
    answers: [
      { text: "Posterior wall of third ventricle", correct: true },
      { text: "Floor of third ventricle", correct: false },
      { text: "Anterior wall of third ventricle", correct: false },
      { text: "Roof of third ventricle", correct: false },
      { text: "None of stated", correct: false },
    ],
  },
  {
    question: "Which of the following does not form the floor of the third ventricle?",
    answers: [
      { text: "Anterior pituitary", correct: true },
      { text: "Tuber cinereum", correct: false },
      { text: "Posterior perforated substance", correct: false },
      { text: "Tegmentum", correct: false },
      { text: "None of stated", correct: false },
    ],
  },
  {
    question: "Floor of 4th ventricle has:",
    answers: [
      { text: "Vagal triangle", correct: true },
      { text: "Infundibulum", correct: false },
      { text: "Mammillary body", correct: false },
      { text: "Tuber cinerium", correct: false },
      { text: "All stated", correct: false },
    ],
  },
  {
    question: "The red nucleus is situated at the level of which of the following?",
    answers: [
      { text: "Mid-brain; superior colliculus", correct: true },
      { text: "Mid-brain; inferior colliculus", correct: false },
      { text: "Pons", correct: false },
      { text: "Open Medulla", correct: false },
      { text: "Closed Medulla", correct: false },
    ],
  },
  {
    question: "Which of the following is concerned with pain and temperature",
    answers: [
      { text: "Lateral spinothalamic tract", correct: true },
      { text: "Pyramidal tract", correct: false },
      { text: "Anterior spinothalamic tract", correct: false },
      { text: "Dorsal spinocerebellar tract", correct: false },
      { text: "DCML", correct: false },
    ],
  },
  {
    question: "CSF escapes the fourth ventricle through:",
    answers: [
      { text: "Luschka foramen", correct: true },
      { text: "Foramen of Monro", correct: false },
      { text: "Aqueduct of Sylvius", correct: false },
      { text: "Magendie foramen", correct: false },
      { text: "Foramen magnum", correct: false },
    ],
  },
  {
    question: "The nerve supply to the kidney is from which of the following?",
    answers: [
      { text: "Coeliac plexus", correct: true },
      { text: "Lumbar plexus", correct: false },
      { text: "Inferior mesenteric nerve", correct: false },
      { text: "None of stated", correct: false },
      { text: "Gastric plexus", correct: false },
    ],
  },
  {
    question: "Which of the following is not a function of the third cranial nerve?",
    answers: [
      { text: "Enters orbit through the inferior orbital fissure", correct: true },
      { text: "Carries parasympathetic nerve", correct: false },
      { text: "Supplies inferior oblique", correct: false },
      { text: "Causes miosis", correct: false },
      { text: "None of stated", correct: false },
    ],
  },
  {
    question: "A 43-year-old woman came with a large abscess in the middle of the right posterior triangle of the neck. The physician incised and drained the abscess. Five days later the patient noticed that she could not extend her right hand above her head to brush her hair. Which of the following are the signs and symptoms of additional harm",
    answers: [
      { text: "Ventral rami of thoracic spinal nerves", correct: true },
      { text: "Brachial plexus", correct: false },
      { text: "Dorsal rami of thoracic spinal nerves", correct: false },
      { text: "Ventral rami of cervical spinal nerves", correct: false },
      { text: "Communicates branches", correct: false },
    ],
  },
  {
    question: "Tensor tympani is supplied by the nerve:",
    answers: [
      { text: "Trigeminal", correct: true },
      { text: "Facial", correct: false },
      { text: "Glossopharyngeal", correct: false },
      { text: "Vagus", correct: false },
      { text: "optic", correct: false },
    ],
  },
  {
    question: "The lesser petrosal nerve passes through which of the following structures?",
    answers: [
      { text: "Foramen ovale", correct: true },
      { text: "Foramen rotundum", correct: false },
      { text: "Canaliculus innominatus", correct: false },
      { text: "Foramen spinosum", correct: false },
      { text: "optic canal", correct: false },
    ],
  },
  {
    question: "Which of the following is not true about sympathetic nervous system fibers arising from the spinal cord?",
    answers: [
      { text: "Splanchnic fibers carry postganglionic fibers", correct: true },
      { text: "Neurons are located in the intermedio-lateral column", correct: false },
      { text: "Pre-ganglionic fibers are myelinated and shorter in length", correct: false },
      { text: "Splanchnic nerves carry GVE andv GVA neural columns", correct: false },
      { text: "All stated", correct: false },
    ],
  },
  {
    question: "Which of the following nerves supplies the rhomboideus major muscle?",
    answers: [
      { text: "Dorsal scapular nerve", correct: true },
      { text: "Spinal accessory nerve, cranial nerve", correct: false },
      { text: "Spinal accessory nerve, spinal part", correct: false },
      { text: "Thoracodorsal nerve", correct: false },
      { text: "Suprascapular", correct: false },
    ],
  },
  {
    question: "Choose the incorrect pair regarding the skull foramina and the structures passing through:",
    answers: [
      { text: "Superior orbital fissure: Optic nerve", correct: true },
      { text: "Maxillary nerve: Foramen rotundum", correct: false },
      { text: "Vestibulocochlear nerve: Internal acoustic meatus", correct: false },
      { text: "Anterior part of jugular foramen: Inferior petrosal sinus", correct: false },
      { text: "None of stated", correct: false },
    ],
  },
  {
    question: "Ptosis results from a lesion of which of the following?",
    answers: [
      { text: "Somatic fibres of occulomotor nerve", correct: true },
      { text: "Facial nerve", correct: false },
      { text: "Superior cervical ganglion", correct: false },
      { text: "Edinger Westphal nucleus", correct: false },
      { text: "Trochlear nerve", correct: false },
    ],
  },
  {
    question: "A 50-year-old diabetic male presents with fever, headache and right eyelid pain. Examination reveals vesicles in upper eye lid, forehead and nose on the right side of face consistent with herpes zoster. Which of the following nerves is likely involved:",
    answers: [
      { text: "Ophthalmic nerve", correct: true },
      { text: "Supraorbital nerve", correct: false },
      { text: "Supratrochlear nerve", correct: false },
      { text: "Lacrimal nerve", correct: false },
      { text: "Vagus nerve", correct: false },
    ],
  },
  {
    question: "Most hard connective tissue present in body are called?",
    answers: [
      { text: "Bones", correct: true },
      { text: "Lymphocytes", correct: false },
      { text: "Cartilages", correct: false },
      { text: "Collagens", correct: false },
      { text: "C and D", correct: false },
    ],
  },
  {
    question: "The inner part of bone that is porous and soft in nature is called:",
    answers: [
      { text: "Spongy bones", correct: true },
      { text: "Compact bones", correct: false },
      { text: "Connecting bones", correct: false },
      { text: "Protective bones", correct: false },
      { text: "All stated", correct: false },
    ],
  },
  {
    question: "Which of the following correctly describes the first step of ossification that takes place in the long bones of the skeleton?",
    answers: [
      { text: "Mesenchymal cells differentiate into chondrocytes", correct: true },
      { text: "Undifferentiated mesenchymal cells differentiate into osteoblasts", correct: false },
      { text: "Blood vessels carry in osteogenic cells to the cartilage template of bone", correct: false },
      { text: "Osteoblasts form from osteochondroprogenitor cells that express CBFAI", correct: false },
      { text: "A,B", correct: false },
    ],
  },
  {
    question: "Which type of cartilage is characterized by the presence of thick bundles of collagen fibers ?",
    answers: [
      { text: "Fibrocartilage", correct: true },
      { text: "Hyaline cartilage", correct: false },
      { text: "Elastic cartilage ", correct: false },
      { text: "All stated", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following cell structures is responsible for synthesizing proteins?",
    answers: [
      { text: "Ribosome", correct: true },
      { text: "Golgi apparatus", correct: false },
      { text: " Lysosome", correct: false },
      { text: "Mitochondrion", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "All of the following statements are true regarding elastic cartilage except that it ?",
    answers: [
      { text: "Is adapted to withstand tension and compression", correct: true },
      { text: "Has abundant elastic fibers in its matrix ", correct: false },
      { text: "Has yellowish appearance ", correct: false },
      { text: "Is found in external auditory canal", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What type of tissue makes up the epiglottis?",
    answers: [
      { text: "Elastic cartilage", correct: true },
      { text: "Hyaline cartilage", correct: false },
      { text: "Fibrocartilage", correct: false },
      { text: "Both a and c", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following are typical features of elastic cartilage?",
    answers: [
      { text: "Cell nests ", correct: true },
      { text: "Nonhomogeneous matrix ", correct: false },
      { text: "Perichondrium covering present ", correct: false },
      { text: "Chondrocytes with eccentric nuclei", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is not a feature of skeletal muscle?",
    answers: [
      { text: "Its actions are involuntary ", correct: true },
      { text: "Its fibers present cross-striations", correct: false },
      { text: "Its fibers are unbranched and multinucleated", correct: false },
      { text: "It possesses stretch receptors", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is not a feature of red muscle fibers?",
    answers: [
      { text: "Primarily used for short bursts of power", correct: true },
      { text: "High myoglobin content", correct: false },
      { text: "Rich supply of blood vessels", correct: false },
      { text: "Slow contraction speed", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What type of tissue makes up the epiglottis?",
    answers: [
      { text: "Elastic cartilage", correct: true },
      { text: "Hyaline cartilage", correct: false },
      { text: "Fibrocartilage", correct: false },
      { text: "Both a and c", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The nasolacrimal groove lies along the line of fusion between the maxillary process and which of the following?",
    answers: [
      { text: "Lateral nasal process", correct: true },
      { text: "Medial nasal process", correct: false },
      { text: "Mandibular process", correct: false },
      { text: "Frontonasal process", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is not true about the notochord?",
    answers: [
      { text: "Derived from hypoblast", correct: true },
      { text: "Defines axis of embryo", correct: false },
      { text: "Serves as primary inductor", correct: false },
      { text: "Remains as nucleus pulposus", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following processes does not contribute to the development of the upper lip?",
    answers: [
      { text: "Lateral nasal processes", correct: true },
      { text: "Frontonasal process", correct: false },
      { text: "Medial nasal processes", correct: false },
      { text: "Maxillary processes", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The embryonic period of development lasts from:",
    answers: [
      { text: "Up to 8 weeks", correct: true },
      { text: "Up to 16 weeks", correct: false },
      { text: "Up to 12 weeks", correct: false },
      { text: "Up to 10 weeks", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "True statement is:",
    answers: [
      { text: "Precapillary sphincter is seen in meta-arteriole ", correct: true },
      { text: "Diameter of sinusoidal capillary is uniform", correct: false },
      { text: "Capillary of endocrine glands are lined with continuous endothelium", correct: false },
      { text: "Internal elastic lamina is well developed in arterioles", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The heart tube is formed during which stage of development?",
    answers: [
      { text: "3weeks", correct: true },
      { text: "6weeks", correct: false },
      { text: "10weeks", correct: false },
      { text: "12weeks", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "From what embryonic layer is the heart derived?",
    answers: [
      { text: "Mesoderm", correct: true },
      { text: "Endoderm", correct: false },
      { text: "Ectoderm", correct: false },
      { text: "Both ectoderm and endoderm", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What type of cells are vital to the blood-thymus barrier and function by forming attachments to one another via desmosomes and occluding junctions?",
    answers: [
      { text: "Squamous thymic epithelial cells", correct: true },
      { text: "Thymic endothelial cells", correct: false },
      { text: "Stellate thymus epithelial cells", correct: false },
      { text: "Thymic pericytes", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "In which part of the thymus does the barrier, essential for accurate positive selection, exist?",
    answers: [
      { text: "Cortex", correct: true },
      { text: "Medulla", correct: false },
      { text: "Hassal's corpuscles", correct: false },
      { text: "Both the medulla and cortex", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Where are the primary T-cells of a lymph node located ?",
    answers: [
      { text: "Paracortex ", correct: true },
      { text: "Cortex ", correct: false },
      { text: "Marginal zone", correct: false },
      { text: "Medulla", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "One Keratinocyte-Melanin Unit comprises",
    answers: [
      { text: "One melanocyte and 36 keratinocytes", correct: true },
      { text: "One melanocyte and 10 keratinocytes", correct: false },
      { text: "One melanocyte and 40 keratinocytes", correct: false },
      { text: "None of stated", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Vitamin D is synthesized by",
    answers: [
      { text: "Keratinocytes", correct: true },
      { text: "Melanocytes", correct: false },
      { text: "Prickle cells", correct: false },
      { text: "Granular cells", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A medical researcher is analyzing a sample of tissue taken from the dorsal aspect of the arm of a patient. Upon inspecting the tissue, the dermis is intact, but she notices some irregularities in the epidermis, specifically in one of the middle layers consisting of diamond-shaped cells and granules. Based on the most likely layer of the epidermis, which of the following statements is most accurate? ",
    answers: [
      { text: "This layer contains the components that are responsible for aggregation, crosslinking, and bundle formation of keratin.", correct: true },
      { text: "This layer is described as a thin transparent layer consisting of eleidin, which is a transformation product of keratohyalin.", correct: false },
      { text: "Within this layer, the anucleate keratinocytes secrete defensins which are part of our first immune defense.", correct: false },
      { text: "The cells within this layer are mitotically active stem cells that are continually producing keratinocytes.", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 68-year-old man presents for an elective right upper lobectomy. He has a past medical history of bronchogenic carcinoma. After the procedure, the right upper lobe goes to the pathology department for evaluation. Under the microscope, a non-small cell carcinoma surrounded by benign lung tissue is visualized. In the benign lung tissue, there is a type of granular cell found diffusely amongst flattened cells that appears large with large nuclei. What is the main function of this cell? ",
    answers: [
      { text: "Secreting surfactant", correct: true },
      { text: "Performing gas exchange", correct: false },
      { text: "Moving mucus", correct: false },
      { text: "Secreting mucus", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 23-year-old lady, the primigravida with 29 weeks of pregnancy, was rushed to the emergency with labor pains. Her mother revealed that her daughter has type 1 diabetes and is on a regular dose of insulin. She gives birth is to a live boy, but the neonate is in a critical condition. The neonate is cyanosed, his respiratory rate is almost 60 breaths per minute, and the heart rate is 144 beats per minute. The neonate was immediately put on a ventilator. The doctors explain to the mother that the neonate is suffering from a disease of insufficient production of surfactant due to immature lungs and cells producing surfactant. Which are those cells? ",
    answers: [
      { text: "Type II pneumocyte", correct: true },
      { text: "Type I pneumocyte", correct: false },
      { text: "Neuroendocrine cells", correct: false },
      { text: "Goblet cells", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A patient presents with an abnormal gene mutation, which alters the patient's taste bud cells. The gene mutation specifically affects two cell types. The first cell type is considered to be a glial-like cell, while the other is known to secrete adenosine triphosphate and acetylcholine neurotransmitters. Which type of taste bud cells are these cells considered, respectively? ",
    answers: [
      { text: "Type I & type II", correct: true },
      { text: "Type II & type I", correct: false },
      { text: "Type II & type III", correct: false },
      { text: "Type IV & type III", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A patient is suffering from trigeminal neuralgia, very painful facial muscle spasms, and the condition has also affected his taste sense. Which taste buds papillae would you expect to be affected in his case?",
    answers: [
      { text: "Filiform papillae", correct: true },
      { text: "Fungiform papillae", correct: false },
      { text: "Circumvallate papillae", correct: false },
      { text: "Foliate papillae", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following about the stomach  is incorrect?",
    answers: [
      { text: "Pylorus has more acid secreting cells", correct: true },
      { text: "Lots of mucous secreting cells in pylorus", correct: false },
      { text: "Chief cells secrete pepsinogen", correct: false },
      { text: "Parietal cells secrete intrinsic factor", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Duct of Bellini are present in:",
    answers: [
      { text: "Kidney", correct: true },
      { text: "Liver", correct: false },
      { text: "Spleen", correct: false },
      { text: "Lung", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which type of epithelium is primarily found lining the urinary bladder, allowing it to stretch and expand?",
    answers: [
      { text: "Transitional epithelium", correct: true },
      { text: "Simple squamous epithelium", correct: false },
      { text: "Stratified squamous epithelium", correct: false },
      { text: "Simple columnar epithelium", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Ansa nephroni is lined by:",
    answers: [
      { text: "Cuboidal and squamous", correct: true },
      { text: "Columnar", correct: false },
      { text: "Squamous epithelium", correct: false },
      { text: "Cuboidal squamous epithelium", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which one of the following functions is attributed to the Sertoli cells?",
    answers: [
      { text: "Secretion of androgen-binding protein", correct: true },
      { text: "Secretion of follicle-stimulating hormone", correct: false },
      { text: "Secretion of testosterone", correct: false },
      { text: "Secretion of LH", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "True about Scarpa's fascia:",
    answers: [
      { text: "Forms suspensory ligament of penis", correct: true },
      { text: "Deep fascia of anterior abdominal wall", correct: false },
      { text: "Also called Buke's fascia", correct: false },
      { text: "Attached to Iliotibial tract", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following statements about the penis is incorrect?",
    answers: [
      { text: "Skin of penis is supplied by superficial external pudendal artery", correct: true },
      { text: "Corpus spongiosum get terminally expanded to form glans penis", correct: false },
      { text: "Arterial blood supply from internal pudendal artery", correct: false },
      { text: "Penile urethra runs in corpus spongiosum", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Spermatozoa are conveyed from the seminiferous tubules to the rete testis via the",
    answers: [
      { text: "Tubuli recti", correct: true },
      { text: "Ductus epididymis", correct: false },
      { text: "Ductuli efferentes", correct: false },
      { text: "Ductus deferens", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "From which region of the developing brain do the cerebral hemispheres arise? ",
    answers: [
      { text: "Telencephalon", correct: true },
      { text: "Diencephalon", correct: false },
      { text: "Mesencephalon", correct: false },
      { text: "Metencephalon", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Many nerve fibers bundle together to form :",
    answers: [
      { text: "Axons", correct: true },
      { text: "Myelin sheath", correct: false },
      { text: "Neurilemma", correct: false },
      { text: "Node of Ranvier", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "In human nervous system, the supporting cells present with neurons are classified as :",
    answers: [
      { text: "Neuroglial cells", correct: true },
      { text: "Dendrite cells", correct: false },
      { text: "Malign cells ", correct: false },
      { text: "Benign cells ", correct: false },
      { text: "nan", correct: false },
    ],
  },
]


const questionElement = document.getElementById('question'); 
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const backButton = document.getElementById('back-btn');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = 'Next';
  backButton.innerHTML = 'Back';
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  const questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

  const shuffledAnswers = [...currentQuestion.answers];
  for (let i = shuffledAnswers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledAnswers[i], shuffledAnswers[j]] = [shuffledAnswers[j], shuffledAnswers[i]];
  }

  shuffledAnswers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener('click', selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = 'none';
  backButton.style.display = 'none';

  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
  } else {
    selectedBtn.classList.add('incorrect');
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });

  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = 'Solve Again';
  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener('click', () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

function handleBackButton() {
  currentQuestionIndex--;
  if (currentQuestionIndex >= 0) {
    showQuestion();
  }
}

backButton.addEventListener('click', () => {
  if (currentQuestionIndex > 0) {
    handleBackButton();
  }
});

searchButton.addEventListener('click', () => {
  const questionNumber = parseInt(searchInput.value, 10);
  if (questionNumber > 0 && questionNumber <= questions.length) {
    currentQuestionIndex = questionNumber - 1;
    showQuestion();
  } else {
    alert('Please enter a valid question number between 1 and ' + questions.length);
  }
});

startQuiz();
