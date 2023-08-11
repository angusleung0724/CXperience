import { useEffect } from 'react';
import { Text, Modal, View, StyleSheet, TouchableOpacity, Image,  } from 'react-native';
import { styles } from '../styles/LoungeDetailsModalStyles';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from "../theme/colors";
import { AnimatedCircularProgress } from 'react-native-circular-progress';


// pass in modalvisible, set modal visible
// pass in path of image, name, location, class, amenities
// pass in max capacity and capacity 



export default function LoungeDetailsModal({className, imagePath, modalVisible, setModalVisible, maxCapacity, currCapacity, name}) {
    const toggleModal = () => {
        setModalVisible(!modalVisible);
    }

    const calculatePercent = () => {
        return Math.floor(currCapacity * 100 / maxCapacity);
    }

    return (
        <>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide fade"
                    visible={modalVisible}
                    transparent={true}
                    onRequestClose={toggleModal}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={styles.contentContainer}>
                                <View style={styles.imageContainer}>
                                    <Image style={styles.heroImage} source={imagePath}/>
                                    <View style={styles.nameContainer}>
                                        <Text style={styles.name}> 
                                            {name}
                                        </Text>
                                        <Text style={styles.class}> 
                                            {className}
                                        </Text>
                                    </View>
                                    <TouchableOpacity onPress={toggleModal}>
                                        <Icon name="close" style={styles.closeButton}/>
                                    </TouchableOpacity>
                                </View>

                                
                                <View style={styles.progressContainer}>
                                    <View style={styles.titleContainer}>
                                        <Text style={styles.cardTitle}>
                                            Capacity
                                        </Text>
                                    </View>
                                    <AnimatedCircularProgress
                                        style={styles.progressBar}
                                        size={200}
                                        width={20}
                                        rotation={0}
                                        fill={calculatePercent()}
                                        duration={1300}
                                        tintColor={colors["cathay-dark-green"]}
                                        backgroundColor={colors["cathay-light-gray"]}>
                                        {
                                            (fill) => (
                                                <View style={styles.progressTextContainer}>
                                                    <View style={styles.progressTextTop}>
                                                        <Text style={styles.progressText}>
                                                            {`${parseInt(fill * maxCapacity / 100)}`}
                                                        </Text>
                                                    </View>
                                                    <Text style={styles.progressTextBottom}>
                                                        {maxCapacity}
                                                    </Text>
                                                </View>
                                            )
                                        }
                                    </AnimatedCircularProgress>
                                </View>






                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </>
    );
}
