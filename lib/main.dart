import 'package:flutter/material.dart';

import 'src/modules/login/login_page.dart';
import 'src/modules/splash/splash_page.dart';

import 'src/shared/themes/app_colors.dart';
import 'src/utils/app_routes.dart';

void main() {
  runApp(const AppWidget());
}

class AppWidget extends StatelessWidget {
  const AppWidget({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    // SystemChrome.setSystemUIOverlayStyle(
    //   SystemUiOverlayStyle(
    //     statusBarIconBrightness: Theme.of(context).brightness == Brightness.dark
    //         ? Brightness.dark
    //         : Brightness.light,
    //   ),
    // );
    // whenever your initialization is completed, remove the splash screen:
    return MaterialApp(
        title: 'PayFlow',
        debugShowCheckedModeBanner: false,
        theme: ThemeData(
          primarySwatch: Colors.grey,
          primaryColor: AppColors.primary,
        ),
        initialRoute: "/splash",
        routes: {
          // AppRoutes.home: (context) => const SplashPage(),
          AppRoutes.login: (context) => const LoginPage(),
          // AppRoutes.scanner: (context) => const SplashPage(),
          AppRoutes.splash: (context) => const SplashPage(),
        }

        // home: const SplashPage(),
        );
  }
}
