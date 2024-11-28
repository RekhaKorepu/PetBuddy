// import { useState } from "react";
// import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
// import DropDownPicker from 'react-native-dropdown-picker';
// import DatePicker from 'react-native-date-picker';
// export default function Reminders({route}: {route: any}): React.JSX.Element {
//     const {pet}= route.params;
//     const [isReminderModalOpen, setIsReminderModalOpen] = useState(false);
//     const [frequencyOpen, setFrequencyOpen] = useState(false);
//     const [frequencyValue, setFrequencyValue] = useState("daily");
//     const [frequencyItems, setFrequencyItems] = useState([
//         { label: 'Daily', value: 'daily' },
//         { label: 'Weekly', value: 'weekly' },
//         { label: 'Monthly', value: 'monthly' },
//     ]);



//     const [activity, setActivity] = useState('');
//     const [date, setDate] = useState(new Date());
//     const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

//     const [startTime, setStartTime] = useState(new Date());
//     const [endTime, setEndTime] = useState(new Date());
//     const [isStartPickerOpen, setIsStartPickerOpen] = useState(false);
//     const [isEndPickerOpen, setIsEndPickerOpen] = useState(false);

//     return (
//         <View style={styles.parentContainer}>
//           <View style={styles.Container}>
//           <View style={styles.petContent}>
//             <Text style={styles.heading}>Remainders</Text>
//             <Image source= {{uri: pet.image[0]}} style={styles.petImage}/>
//           </View>
//           <View style={styles.switchContainers}>
//             <View style={styles.howOften}><Text style={styles.text}> Daily</Text></View>
//             <View style={styles.howOften}><Text style={styles.text}> Weekly</Text></View>
//             <View style={styles.howOften}><Text style={styles.text}> Monthly</Text></View>
//           </View>
//           <View style={styles.activityContent}>

//           </View>
//             <View style={styles.buttonContainer}>
//                 <View style={styles.addReminder}>
//                     <TouchableOpacity onPress={() => setIsReminderModalOpen(true)}>
//                         <Text style={{ color: 'white', fontWeight: 'bold' }}>Add Reminder</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//             </View>

//             {isReminderModalOpen && (
//                 <Modal
//                     animationType="slide"
//                     transparent={true}
//                     visible={isReminderModalOpen}
//                     onRequestClose={() => setIsReminderModalOpen(false)}
//                 >
//                     <View style={styles.modalBox}>
//                         <TouchableOpacity onPress={() => setIsReminderModalOpen(false)}>
//                             <Text style={styles.closeButton}>X</Text>
//                         </TouchableOpacity>
//                         <DropDownPicker
//                             open={frequencyOpen}
//                             value={frequencyValue}
//                             items={frequencyItems}
//                             setOpen={setFrequencyOpen}
//                             setValue={setFrequencyValue}
//                             setItems={setFrequencyItems}
//                             style={styles.dropdown}
//                             dropDownContainerStyle={styles.dropdownContainer}
//                         />
//                         <TextInput
//                             style={styles.textInput}
//                             placeholder="Activity"
//                             value={activity}
//                             onChangeText={setActivity}
//                         />
//                         <TouchableOpacity onPress={() => setIsDatePickerOpen(true)} style={styles.datePickerButton}>
//                             <Text style={styles.dateText}>{format(date, 'dd/MM/yyyy')}</Text>
//                         </TouchableOpacity>
//                         <DatePicker
//                             modal
//                             mode="date"
//                             open={isDatePickerOpen}
//                             date={date}
//                             onConfirm={(selectedDate) => {
//                                 setDate(selectedDate);
//                                 setIsDatePickerOpen(false);
//                             }}
//                             onCancel={() => setIsDatePickerOpen(false)}
//                       />

//                         <DatePicker
//                             modal
//                             mode="time"
//                             open={isStartPickerOpen}
//                             date={startTime}
//                             onConfirm={(time) => {
//                                 setStartTime(time);
//                                 setIsStartPickerOpen(false);
//                             }}
//                             onCancel={() => setIsStartPickerOpen(false)}
//                         />
   
//                         <TouchableOpacity style={styles.addButton}>
//                             <Text style={styles.addButtonText}>Add Reminder</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </Modal>
//             )}
//         </View>
//     );
// }
import { Text, View } from "react-native";
export default function Remainders(){
    return(
        <View>
            <Text>Hello</Text>
        </View>
    )
}
// import React, { useState } from "react";
// import { Image, Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
// import DropDownPicker from "react-native-dropdown-picker";
// import DatePicker from "react-native-date-picker";
// import { format } from "date-fns";

// export default function Reminders({ route }: { route: any }): React.JSX.Element {
//   const { pet } = route.params;

//   const [isReminderModalOpen, setIsReminderModalOpen] = useState(false);
//   const [frequencyOpen, setFrequencyOpen] = useState(false);
//   const [frequencyValue, setFrequencyValue] = useState("daily");
//   const [frequencyItems, setFrequencyItems] = useState([
//     { label: "Daily", value: "daily" },
//     { label: "Weekly", value: "weekly" },
//     { label: "Monthly", value: "monthly" },
//   ]);

//   const [activity, setActivity] = useState("");
//   const [date, setDate] = useState(new Date());
//   const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

//   const [startTime, setStartTime] = useState(new Date());
//   const [endTime, setEndTime] = useState(new Date());
//   const [isStartPickerOpen, setIsStartPickerOpen] = useState(false);
//   const [isEndPickerOpen, setIsEndPickerOpen] = useState(false);

//   return (
//     <View style={styles.parentContainer}>
//       <View style={styles.container}>
//         {/* <View style={styles.header}>
//           <Text style={styles.heading}>Reminders</Text>
//           <Image source={{ uri: pet.image[0] }} style={styles.petImage} />
//         </View> */}
//         <View style={styles.switchContainers}>
//           <TouchableOpacity style={styles.howOften}>
//             <Text style={styles.text}>Daily</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.howOften}>
//             <Text style={styles.text}>Weekly</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.howOften}>
//             <Text style={styles.text}>Monthly</Text>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.reminderList}>
//           <Text style={styles.listItem}>Vaccination: 2nd, 10 AM - 11 AM</Text>
//           <Text style={styles.listItem}>Grooming: 1st, 3 PM - 5 PM</Text>
//         </View>
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity
//             style={styles.addReminderButton}
//             onPress={() => setIsReminderModalOpen(true)}
//           >
//             <Text style={styles.addReminderText}>+ Add Reminder</Text>
//           </TouchableOpacity>
//         </View>
//       </View>

//       {isReminderModalOpen && (
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={isReminderModalOpen}
//           onRequestClose={() => setIsReminderModalOpen(false)}
//         >
//           <View style={styles.modalBox}>
//             <TouchableOpacity
//               onPress={() => setIsReminderModalOpen(false)}
//               style={styles.closeButton}
//             >
//               <Text style={styles.closeButtonText}>X</Text>
//             </TouchableOpacity>
//             <DropDownPicker
//               open={frequencyOpen}
//               value={frequencyValue}
//               items={frequencyItems}
//               setOpen={setFrequencyOpen}
//               setValue={setFrequencyValue}
//               setItems={setFrequencyItems}
//               style={styles.dropdown}
//               dropDownContainerStyle={styles.dropdownContainer}
//             />
//             <TextInput
//               style={styles.textInput}
//               placeholder="Activity"
//               value={activity}
//               onChangeText={setActivity}
//             />
//             <TouchableOpacity
//               onPress={() => setIsDatePickerOpen(true)}
//               style={styles.datePickerButton}
//             >
//               <Text style={styles.dateText}>{format(date, "dd/MM/yyyy")}</Text>
//             </TouchableOpacity>
//             <DatePicker
//               modal
//               mode="date"
//               open={isDatePickerOpen}
//               date={date}
//               onConfirm={(selectedDate) => {
//                 setDate(selectedDate);
//                 setIsDatePickerOpen(false);
//               }}
//               onCancel={() => setIsDatePickerOpen(false)}
//             />
//             <TouchableOpacity
//               onPress={() => setIsStartPickerOpen(true)}
//               style={styles.timePickerButton}
//             >
//               <Text style={styles.timeText}>
//                 {format(startTime, "hh:mm a")}
//               </Text>
//             </TouchableOpacity>
//             <DatePicker
//               modal
//               mode="time"
//               open={isStartPickerOpen}
//               date={startTime}
//               onConfirm={(time) => {
//                 setStartTime(time);
//                 setIsStartPickerOpen(false);
//               }}
//               onCancel={() => setIsStartPickerOpen(false)}
//             />
//             <TouchableOpacity
//               onPress={() => setIsEndPickerOpen(true)}
//               style={styles.timePickerButton}
//             >
//               <Text style={styles.timeText}>{format(endTime, "hh:mm a")}</Text>
//             </TouchableOpacity>
//             <DatePicker
//               modal
//               mode="time"
//               open={isEndPickerOpen}
//               date={endTime}
//               onConfirm={(time) => {
//                 setEndTime(time);
//                 setIsEndPickerOpen(false);
//               }}
//               onCancel={() => setIsEndPickerOpen(false)}
//             />
//             <TouchableOpacity style={styles.addButton}>
//               <Text style={styles.addButtonText}>Add Reminder</Text>
//             </TouchableOpacity>
//           </View>
//         </Modal>
//       )}
//     </View>
//   );
// }

// const styles = {
//   parentContainer: {
//     flex: 1,
//     backgroundColor: "#F5F5F5",
//   },
//   container: {
//     padding: 16,
//     flex: 1,
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 16,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: "bold",
//   },
//   petImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//   },
//   switchContainers: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginVertical: 16,
//   },
//   howOften: {
//     backgroundColor: "#D9F4D6",
//     padding: 8,
//     borderRadius: 8,
//   },
//   text: {
//     fontSize: 16,
//     color: "#333",
//   },
//   reminderList: {
//     marginVertical: 16,
//   },
//   listItem: {
//     fontSize: 16,
//     marginBottom: 8,
//   },
//   buttonContainer: {
//     alignItems: "center",
//   },
//   addReminderButton: {
//     backgroundColor: "#4CAF50",
//     padding: 12,
//     borderRadius: 8,
//   },
//   addReminderText: {
//     color: "#FFF",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   modalBox: {
//     backgroundColor: "#FFF",
//     margin: 32,
//     borderRadius: 8,
//     padding: 16,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   closeButton: {
//     alignSelf: "flex-end",
//   },
//   closeButtonText: {
//     fontSize: 18,
//     color: "#333",
//   },
//   dropdown: {
//     width: "100%",
//     marginBottom: 16,
//   },
//   textInput: {
//     width: "100%",
//     borderColor: "#CCC",
//     borderWidth: 1,
//     borderRadius: 8,
//     padding: 8,
//     marginBottom: 16,
//   },
//   datePickerButton: {
//     width: "100%",
//     borderColor: "#CCC",
//     borderWidth: 1,
//     borderRadius: 8,
//     padding: 12,
//     marginBottom: 16,
//     alignItems: "center",
//   },
//   dateText: {
//     fontSize: 16,
//     color: "#333",
//   },
//   timePickerButton: {
//     width: "100%",
//     borderColor: "#CCC",
//     borderWidth: 1,
//     borderRadius: 8,
//     padding: 12,
//     marginBottom: 16,
//     alignItems: "center",
//   },
//   timeText: {
//     fontSize: 16,
//     color: "#333",
//   },
//   addButton: {
//     backgroundColor: "#4CAF50",
//     padding: 12,
//     borderRadius: 8,
//     marginTop: 16,
//   },
//   addButtonText: {
//     color: "#FFF",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// };
