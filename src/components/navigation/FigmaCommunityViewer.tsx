import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Modal,
  StatusBar,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

interface FigmaCommunityViewerProps {
  fileId: string;
  title?: string;
  author?: string;
  description?: string;
}

export function FigmaCommunityViewer({
  fileId,
  title = "PayFlow Design System",
  author = "Noah Entregas", 
  description = "Sistema de design completo para aplicativo de gerenciamento de boletos",
}: FigmaCommunityViewerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const figmaCommunityUrl = `https://www.figma.com/community/file/${fileId}`;

  const openFigma = async () => {
    try {
      await Linking.openURL(figmaCommunityUrl);
    } catch (error) {
      console.error("Erro ao abrir Figma:", error);
    }
  };

  return (
    <>
      <View style={styles.container}>
        {/* Header with project info */}
        <View style={styles.header}>
          <View style={styles.projectInfo}>
            <View style={styles.avatarContainer}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{author.charAt(0)}</Text>
              </View>
            </View>
            <View style={styles.textInfo}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.author}>por {author}</Text>
            </View>
          </View>
          
          <View style={styles.actions}>
            <TouchableOpacity 
              style={styles.actionButton}
              onPress={() => setIsFullscreen(true)}
            >
              <Ionicons name="expand-outline" size={20} color="#fff" />
              <Text style={styles.actionText}>Visualizar</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Preview Frame */}
        <View style={styles.previewFrame}>
          <View style={styles.browserBar}>
            <View style={styles.browserControls}>
              <View style={[styles.browserButton, { backgroundColor: '#FF5F57' }]} />
              <View style={[styles.browserButton, { backgroundColor: '#FEBC30' }]} />
              <View style={[styles.browserButton, { backgroundColor: '#28CA42' }]} />
            </View>
            <View style={styles.urlBar}>
              <Text style={styles.urlText}>figma.com/community/file/{fileId}</Text>
            </View>
          </View>
          
          <View style={styles.figmaInterface}>
            {/* Figma-like toolbar */}
            <View style={styles.figmaToolbar}>
              <View style={styles.toolbarLeft}>
                <Ionicons name="menu-outline" size={16} color="#000" />
                <Text style={styles.toolbarText}>PayFlow</Text>
              </View>
              <View style={styles.toolbarRight}>
                <TouchableOpacity onPress={openFigma}>
                  <Ionicons name="share-outline" size={16} color="#000" />
                </TouchableOpacity>
              </View>
            </View>
            
            {/* Canvas preview */}
            <View style={styles.canvas}>
              <View style={styles.deviceFrame}>
                <View style={styles.screen}>
                  {/* Mock mobile screens */}
                  <View style={styles.mockScreen}>
                    <View style={styles.mockHeader}>
                      <View style={styles.mockStatusBar} />
                      <Text style={styles.mockTitle}>PayFlow</Text>
                    </View>
                    <View style={styles.mockContent}>
                      <View style={styles.mockCard} />
                      <View style={styles.mockCard} />
                      <View style={[styles.mockCard, { backgroundColor: '#6C5CE7' }]} />
                    </View>
                  </View>
                </View>
              </View>
              
              {/* Layers panel */}
              <View style={styles.layersPanel}>
                <Text style={styles.panelTitle}>Layers</Text>
                <View style={styles.layerItem}>
                  <Ionicons name="phone-portrait-outline" size={14} color="#666" />
                  <Text style={styles.layerText}>iPhone 14 Pro</Text>
                </View>
                <View style={styles.layerItem}>
                  <Ionicons name="square-outline" size={14} color="#666" />
                  <Text style={styles.layerText}>Home Screen</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Description */}
        <View style={styles.description}>
          <Text style={styles.descriptionText}>{description}</Text>
          <TouchableOpacity style={styles.openButton} onPress={openFigma}>
            <Ionicons name="arrow-forward" size={16} color="#6C5CE7" />
            <Text style={styles.openButtonText}>Abrir no Figma</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Fullscreen Modal */}
      <Modal
        visible={isFullscreen}
        animationType="slide"
        onRequestClose={() => setIsFullscreen(false)}
      >
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <View style={styles.fullscreenContainer}>
          <View style={styles.fullscreenHeader}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setIsFullscreen(false)}
            >
              <Ionicons name="close" size={24} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.fullscreenTitle}>PayFlow - Figma Community</Text>
            <TouchableOpacity style={styles.openExternalButton} onPress={openFigma}>
              <Ionicons name="open-outline" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
          
          {/* Fullscreen preview */}
          <View style={styles.fullscreenContent}>
            <View style={styles.fullscreenCanvas}>
              <View style={styles.fullscreenDevice}>
                <View style={styles.fullscreenScreen}>
                  <View style={styles.mockScreen}>
                    <View style={styles.mockHeader}>
                      <View style={styles.mockStatusBar} />
                      <Text style={styles.mockTitle}>PayFlow</Text>
                    </View>
                    <View style={styles.mockContent}>
                      <View style={styles.mockCard} />
                      <View style={styles.mockCard} />
                      <View style={[styles.mockCard, { backgroundColor: '#6C5CE7' }]} />
                      <View style={styles.mockCard} />
                    </View>
                  </View>
                </View>
              </View>
              
              <View style={styles.fullscreenInfo}>
                <Text style={styles.fullscreenInfoTitle}>Interaja com o protótipo</Text>
                <Text style={styles.fullscreenInfoDesc}>Toque no botão abaixo para abrir o projeto no Figma Community</Text>
                <TouchableOpacity style={styles.fullscreenOpenButton} onPress={openFigma}>
                  <Ionicons name="logo-figma" size={20} color="#fff" />
                  <Text style={styles.fullscreenOpenText}>Abrir no Figma Community</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginVertical: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  projectInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  avatarContainer: {
    marginRight: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#6C5CE7",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  textInfo: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginBottom: 2,
  },
  author: {
    fontSize: 14,
    color: "#666",
  },
  actions: {
    flexDirection: "row",
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#6C5CE7",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
  },
  actionText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
    marginLeft: 4,
  },
  previewFrame: {
    backgroundColor: "#F8F9FA",
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
  },
  browserBar: {
    backgroundColor: "#E9ECEF",
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#DEE2E6",
  },
  browserControls: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 12,
  },
  browserButton: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 4,
  },
  urlBar: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  urlText: {
    fontSize: 12,
    color: "#666",
  },
  figmaInterface: {
    backgroundColor: "#fff",
    minHeight: 300,
  },
  figmaToolbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#E9ECEF",
  },
  toolbarLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  toolbarText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: "500",
  },
  toolbarRight: {
    flexDirection: "row",
  },
  canvas: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#F5F5F5",
  },
  deviceFrame: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  screen: {
    width: 180,
    height: 320,
    backgroundColor: "#000",
    borderRadius: 20,
    padding: 4,
  },
  mockScreen: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 16,
    overflow: "hidden",
  },
  mockHeader: {
    backgroundColor: "#6C5CE7",
    padding: 16,
    alignItems: "center",
  },
  mockStatusBar: {
    height: 4,
    width: 60,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 2,
    marginBottom: 8,
  },
  mockTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  mockContent: {
    flex: 1,
    padding: 16,
  },
  mockCard: {
    height: 60,
    backgroundColor: "#F0F0F0",
    borderRadius: 8,
    marginBottom: 12,
  },
  layersPanel: {
    width: 120,
    backgroundColor: "#FAFBFC",
    borderLeftWidth: 1,
    borderLeftColor: "#E9ECEF",
    padding: 8,
  },
  panelTitle: {
    fontSize: 12,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  layerItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
  },
  layerText: {
    fontSize: 11,
    color: "#666",
    marginLeft: 6,
  },
  description: {
    padding: 16,
  },
  descriptionText: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
    marginBottom: 12,
  },
  openButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  openButtonText: {
    fontSize: 14,
    color: "#6C5CE7",
    fontWeight: "500",
    marginLeft: 4,
  },
  fullscreenContainer: {
    flex: 1,
    backgroundColor: "#000",
  },
  fullscreenHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1E1E1E",
    paddingTop: StatusBar.currentHeight || 40,
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  closeButton: {
    padding: 8,
  },
  fullscreenTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    flex: 1,
    textAlign: "center",
  },
  openExternalButton: {
    padding: 8,
  },
  fullscreenContent: {
    flex: 1,
    backgroundColor: "#1E1E1E",
  },
  fullscreenCanvas: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  fullscreenDevice: {
    width: 280,
    height: 500,
    backgroundColor: "#000",
    borderRadius: 30,
    padding: 6,
    marginBottom: 30,
  },
  fullscreenScreen: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 24,
    overflow: "hidden",
  },
  fullscreenInfo: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  fullscreenInfoTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  fullscreenInfoDesc: {
    color: "#ccc",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 20,
  },
  fullscreenOpenButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F24E1E",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  fullscreenOpenText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8,
  },
});
