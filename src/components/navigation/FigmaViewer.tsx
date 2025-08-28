import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Dimensions,
  Modal,
  StatusBar
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface Screen {
  id: string;
  name: string;
  component: React.ComponentType;
}

interface FigmaViewerProps {
  screens: Screen[];
  initialScreen?: string;
}

export function FigmaViewer({ 
  screens, 
  initialScreen = screens[0]?.id 
}: FigmaViewerProps) {
  const [currentScreen, setCurrentScreen] = useState(initialScreen);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const CurrentComponent = screens.find(s => s.id === currentScreen)?.component;
  const currentIndex = screens.findIndex(s => s.id === currentScreen);
  
  const navigateToScreen = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next' 
      ? Math.min(currentIndex + 1, screens.length - 1)
      : Math.max(currentIndex - 1, 0);
    
    setCurrentScreen(screens[newIndex].id);
  };

  return (
    <>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.screenTitle}>
              {screens.find(s => s.id === currentScreen)?.name}
            </Text>
            <Text style={styles.screenCounter}>
              {currentIndex + 1} de {screens.length}
            </Text>
          </View>
          
          <TouchableOpacity 
            style={styles.fullscreenButton}
            onPress={() => setIsFullscreen(true)}
          >
            <Ionicons name="expand-outline" size={24} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Device Frame */}
        <View style={styles.deviceContainer}>
          <View style={styles.deviceFrame}>
            <View style={styles.deviceScreen}>
              {CurrentComponent && <CurrentComponent />}
            </View>
          </View>
        </View>

        {/* Navigation */}
        <View style={styles.navigation}>
          <TouchableOpacity
            style={[styles.navButton, currentIndex === 0 && styles.navButtonDisabled]}
            onPress={() => navigateToScreen('prev')}
            disabled={currentIndex === 0}
          >
            <Ionicons 
              name="chevron-back" 
              size={24} 
              color={currentIndex === 0 ? "#CCC" : "#0066FF"} 
            />
          </TouchableOpacity>

          <View style={styles.dotsContainer}>
            {screens.map((screen, index) => (
              <TouchableOpacity
                key={screen.id}
                style={[
                  styles.dot,
                  currentScreen === screen.id && styles.activeDot
                ]}
                onPress={() => setCurrentScreen(screen.id)}
              />
            ))}
          </View>

          <TouchableOpacity
            style={[styles.navButton, currentIndex === screens.length - 1 && styles.navButtonDisabled]}
            onPress={() => navigateToScreen('next')}
            disabled={currentIndex === screens.length - 1}
          >
            <Ionicons 
              name="chevron-forward" 
              size={24} 
              color={currentIndex === screens.length - 1 ? "#CCC" : "#0066FF"} 
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Fullscreen Modal */}
      <Modal
        visible={isFullscreen}
        animationType="fade"
        statusBarTranslucent
      >
        <StatusBar hidden />
        <View style={styles.fullscreenContainer}>
          <TouchableOpacity
            style={styles.exitButton}
            onPress={() => setIsFullscreen(false)}
          >
            <Ionicons name="close" size={30} color="#FFFFFF" />
          </TouchableOpacity>

          <View style={styles.fullscreenDeviceFrame}>
            <View style={styles.fullscreenDeviceScreen}>
              {CurrentComponent && <CurrentComponent />}
            </View>
          </View>

          <View style={styles.fullscreenNavigation}>
            <TouchableOpacity
              style={[styles.fullscreenNavButton, currentIndex === 0 && styles.navButtonDisabled]}
              onPress={() => navigateToScreen('prev')}
              disabled={currentIndex === 0}
            >
              <Ionicons 
                name="chevron-back" 
                size={30} 
                color={currentIndex === 0 ? "rgba(255,255,255,0.3)" : "#FFFFFF"} 
              />
            </TouchableOpacity>

            <View style={styles.fullscreenInfo}>
              <Text style={styles.fullscreenTitle}>
                {screens.find(s => s.id === currentScreen)?.name}
              </Text>
              <Text style={styles.fullscreenCounter}>
                {currentIndex + 1} / {screens.length}
              </Text>
            </View>

            <TouchableOpacity
              style={[styles.fullscreenNavButton, currentIndex === screens.length - 1 && styles.navButtonDisabled]}
              onPress={() => navigateToScreen('next')}
              disabled={currentIndex === screens.length - 1}
            >
              <Ionicons 
                name="chevron-forward" 
                size={30} 
                color={currentIndex === screens.length - 1 ? "rgba(255,255,255,0.3)" : "#FFFFFF"} 
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  headerLeft: {
    flex: 1,
  },
  screenTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 2,
  },
  screenCounter: {
    fontSize: 14,
    color: '#666',
  },
  fullscreenButton: {
    padding: 8,
  },
  deviceContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  deviceFrame: {
    width: 320,
    height: 640,
    backgroundColor: '#000000',
    borderRadius: 25,
    padding: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 20,
  },
  deviceScreen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 21,
    overflow: 'hidden',
  },
  navigation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  navButton: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#F8F9FA',
  },
  navButtonDisabled: {
    opacity: 0.5,
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#CCC',
  },
  activeDot: {
    backgroundColor: '#0066FF',
    width: 20,
  },
  
  // Fullscreen styles
  fullscreenContainer: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  exitButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 10,
    padding: 10,
  },
  fullscreenDeviceFrame: {
    width: Math.min(screenWidth * 0.9, 400),
    height: Math.min(screenHeight * 0.8, 800),
    backgroundColor: '#1A1A1A',
    borderRadius: 30,
    padding: 6,
  },
  fullscreenDeviceScreen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    overflow: 'hidden',
  },
  fullscreenNavigation: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  fullscreenNavButton: {
    padding: 15,
  },
  fullscreenInfo: {
    alignItems: 'center',
  },
  fullscreenTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  fullscreenCounter: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.7)',
  },
});

export default FigmaViewer;
