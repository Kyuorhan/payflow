import 'package:flutter/material.dart';
// import 'package:payflow/shared/Auth/auth_controller.dart';
import 'package:payflow/shared/themes/app_colors.dart';
import 'package:payflow/shared/themes/app_images.dart';

class SplashPage extends StatelessWidget {
  const SplashPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Size mySize = MediaQuery.of(context).size;
    // final authController = AuthController();
    // authController.currentUser(context);
    return Scaffold(
      backgroundColor: AppColors.background,
      body: Stack(
        children: [
          Center(
            child: Image.asset(
              AppImages.union,
              width: mySize.width * 0.5,
              height: mySize.height * 0.5,
            ),
          ),
          Center(
            child: Image.asset(
              AppImages.logoFull,
              width: mySize.width * 0.3,
              height: mySize.height * 0.3,
            ),
          ),
        ],
      ),
    );
  }
}

/*
class SplashPage extends StatefulWidget {
  const SplashPage({super.key});

  @override
  State<SplashPage> createState() => _SplashPageState();
}


class _SplashPageState extends State<SplashPage> {
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    const duration = Duration(milliseconds: 500);
    const double opacity = 1;
    /*
    double opacity = 1;
    for (var i = 0; i <= 3; i++) {
      if (opacity <= 0.5) {
        opacity = 1;
      } else {
        opacity = 0.5;
      }
    }
    */

    animatedOpacity() {
      for (var i = 0; i <= 3; i++) {
        if (opacity <= 0.5) {
          // opacity = 1;
          return 1.0;
        } else {
          return 0.5;
        }
      }
    }

    return Scaffold(
      backgroundColor: AppColors.background,
      body: Stack(
        children: [
          Center(
            child: AnimatedOpacity(
              curve: Curves.linear,
              opacity: opacity,
              duration: duration,
              child: Image.asset(
                AppImages.logoFull,
                width: size.width * 0.3,
                height: size.height * 0.3,
              ),
            ),
          ),
          Center(
            child: AnimatedOpacity(
              curve: Curves.linear,
              opacity: opacity,
              duration: duration,
              child: Image.asset(
                AppImages.union,
                width: size.width * 0.5,
                height: size.height * 0.5,
              ),
            ),
          ),
        ],
      ),
    );
  }
}
*/
