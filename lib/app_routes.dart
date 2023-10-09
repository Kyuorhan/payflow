import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:payflow/src/modules/splash/splash_page.dart';
import 'shared/themes/app_colors.dart';

class AppRoutes extends StatelessWidget {
  const AppRoutes({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    SystemChrome.setPreferredOrientations([
      DeviceOrientation.portraitUp,
      DeviceOrientation.portraitDown,
    ]);

    return MaterialApp(
      title: 'PayFlow',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.grey,
        primaryColor: AppColors.primary,
      ),
      initialRoute: "/splash",
      routes: {
        "/splash": (context) => const SplashPage(),
        // "/home": (context) => const HomePage(),
        // "/login": (context) => const LoginPage(),
        // "/barcode_scanner": (context) => const BarcodeScannerPage()
      },
    );
  }
}
