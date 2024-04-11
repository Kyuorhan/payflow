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

  // @override
  // void dispose() {
  //   super.dispose();
  //   SystemChrome.restoreSystemUIOverlays();
  //   // SystemChrome.setSystemUIOverlayStyle(
  //   //   const SystemUiOverlayStyle(
  //   //     statusBarIconBrightness: Brightness.light,
  //   //   ),
  //   // );
  //   // [SystemUiOverlayStyle.statusBarColor]
  // }

  @override
  Widget build(BuildContext context) {
    // Size size = MediaQuery.of(context).size;
    return Scaffold(
      backgroundColor: AppColors.background,
      extendBody: true,
      extendBodyBehindAppBar: true,
      body: LayoutBuilder(builder: (context, constraints) {
        return Stack(
          children: [
            Center(
              child: Image.asset(
                AppImages.union,
                width: constraints.maxWidth * 0.6,
                // fit: BoxFit.cover,
              ),
            ),
            Center(
              child: Image.asset(
                AppImages.logoFull,
                width: constraints.maxWidth * 0.32,
              ),
            ),
          ],
        );
      }),
    );
  }
}
