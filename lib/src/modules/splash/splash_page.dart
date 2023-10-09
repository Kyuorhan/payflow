import 'package:flutter/material.dart';
// import 'package:payflow/shared/Auth/auth_controller.dart';
import 'package:payflow/shared/themes/app_colors.dart';
import 'package:payflow/shared/themes/app_images.dart';

// class SplashPage extends StatelessWidget {
//   const SplashPage({Key? key}) : super(key: key);

//   @override
//   Widget build(BuildContext context) {
//     Size mySize = MediaQuery.of(context).size;
//     // final authController = AuthController();
//     // authController.currentUser(context);
//     return Scaffold(
//       backgroundColor: AppColors.background,
//       body: Stack(
//         children: [
//           Center(
//             child: Image.asset(
//               AppImages.union,
//               width: mySize.width * 0.5,
//               height: mySize.height * 0.5,
//             ),
//           ),
//           Center(
//             child: Image.asset(
//               AppImages.logoFull,
//               width: mySize.width * 0.3,
//               height: mySize.height * 0.3,
//             ),
//           ),
//         ],
//       ),
//     );
//   }
// }

class SplashPage extends StatelessWidget {
  const SplashPage({super.key});

  final double _opacity = 1;
  final _duration = const Duration(seconds: 3);

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;

    // double tapped = 1;
    // while (tapped > 0.5) {
    //   tapped = tapped - 0.1;
    // }

    return Scaffold(
      backgroundColor: AppColors.background,
      body: Stack(
        children: [
          Center(
            child: AnimatedOpacity(
              curve: Curves.linear,
              opacity: _opacity,
              duration: _duration,
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
              opacity: _opacity,
              duration: _duration,
              child: Image.asset(
                AppImages.union,
                width: size.width * 0.5,
                height: size.height * 0.5,
              ),
            ),
          ),
          Center(
            child: AnimatedOpacity(
              opacity: _opacity,
              duration: _duration,
            ),
          )
        ],
      ),
    );
  }
}
