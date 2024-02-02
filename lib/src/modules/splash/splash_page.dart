import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import '../../shared/themes/app_colors.dart';
import '../../shared/themes/app_images.dart';
import '../../utils/app_routes.dart';

class SplashPage extends StatefulWidget {
  const SplashPage({super.key});

  @override
  State<SplashPage> createState() => _SplashPageState();
}

class _SplashPageState extends State<SplashPage>
    with SingleTickerProviderStateMixin {
  @override
  void initState() {
    super.initState();
    SystemChrome.setEnabledSystemUIMode(SystemUiMode.edgeToEdge);
    SystemChrome.setPreferredOrientations([
      DeviceOrientation.portraitUp,
      DeviceOrientation.portraitDown,
    ]);
    SystemChrome.setSystemUIOverlayStyle(
      const SystemUiOverlayStyle(
        statusBarColor: AppColors.transparent,
        // statusBarIconBrightness: Brightness.dark,
        systemNavigationBarColor: AppColors.transparent,
      ),
    );
    Future.delayed(const Duration(seconds: 5), () {
      Navigator.of(context).pushReplacementNamed(AppRoutes.login);
    });
  }

  @override
  void dispose() {
    super.dispose();
    SystemChrome.setEnabledSystemUIMode(
      SystemUiMode.manual,
      overlays: SystemUiOverlay.values,
    );
    // SystemChrome.setSystemUIOverlayStyle(
    //   const SystemUiOverlayStyle(
    //     statusBarIconBrightness: Brightness.light,
    //   ),
    // );
    // [SystemUiOverlayStyle.statusBarColor]
  }

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Scaffold(
      backgroundColor: AppColors.background,
      // appBar: AppBar(backgroundColor: AppColors.primary),
      resizeToAvoidBottomInset: true,
      body: Stack(
        children: [
          Center(
            child: Image.asset(
              AppImages.union,
              width: size.width * 0.75,
              height: size.height * 0.75,
              // fit: BoxFit.cover,
            ),
          ),
          Center(
            child: Image.asset(
              AppImages.logoFull,
              width: size.width * 0.3,
              height: size.height * 0.3,
            ),
          ),
        ],
      ),
    );
  }
}
