import 'package:flutter/material.dart';
import 'package:payflow/src/shared/themes/app_colors.dart';

import '../../themes/app_images.dart';
import '../../themes/app_texte_style.dart';

// class SocialLoginButton extends StatelessWidget {
//   const SocialLoginButton({super.key});

//   @override
//   Widget build(BuildContext context) {
//     return Container(
//       // width: 320,
//       height: 56,
//       decoration: BoxDecoration(
//         color: AppColors.shape,
//         border:
//             const Border.fromBorderSide(BorderSide(color: AppColors.stroke)),
//         borderRadius: BorderRadius.circular(5),
//       ),
//       child: Row(
//         children: [
//           Expanded(
//             flex: 1,
//             child: Row(
//               children: [
//                 Padding(
//                   padding: const EdgeInsets.all(15.0),
//                   child: Image.asset(AppImages.google),
//                 ),
//                 Container(
//                   width: 1,
//                   height: 56,
//                   color: AppColors.stroke,
//                 )
//               ],
//             ),
//           ),
//           Expanded(
//             flex: 4,
//             child: Center(
//               child: Text(
//                 "Entrar com Google",
//                 style: TextStyles.buttonGray,
//               ),
//             ),
//           )
//         ],
//       ),
//     );
//   }
// }

class SocialLoginButton extends StatelessWidget {
  const SocialLoginButton({super.key});

  @override
  Widget build(BuildContext context) {
    return FractionallySizedBox(
      widthFactor: 0.75,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          FittedBox(
            fit: BoxFit.fitWidth,
            child: Material(
              borderRadius: const BorderRadius.all(Radius.circular(5)),
              color: AppColors.shape,
              elevation: 10.0,
              child: MaterialButton(
                padding: const EdgeInsets.symmetric(
                    horizontal: 32.0, vertical: 10.0),
                splashColor: AppColors.shape,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(12),
                ),
                onPressed: () {
                  // Ação do botão Facebook
                },
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  // textBaseline: TextBaseline.alphabetic,
                  children: [
                    Container(
                      height: 56,
                      padding: const EdgeInsets.all(12.0),
                      child: Row(
                        children: [
                          Image.asset(AppImages.google),
                          const SizedBox(width: 12.0),
                          Container(
                            width: 1,
                            color: AppColors.stroke,
                          ),
                        ],
                      ),
                    ),
                    Text(
                      "Entrar com Google",
                      style: TextStyles.buttonGray,
                    ),
                  ],
                ),

                // child: SizedBox(
                //   height: 56,
                //   child: Row(
                //     mainAxisAlignment: MainAxisAlignment.center,
                //     // textBaseline: TextBaseline.alphabetic,
                //     children: [
                //       Padding(
                //         padding: const EdgeInsets.all(8.0),
                //         child: Row(children: [
                //           Image.asset(
                //             AppImages.google,
                //             width: 52,
                //           ),
                //           const SizedBox(width: 12.0),
                //           Container(
                //             width: 1,
                //             color: AppColors.stroke,
                //           )
                //         ]),
                //       ),
                //       Padding(
                //         padding: const EdgeInsets.symmetric(horizontal: 12.0),
                //         child: Text(
                //           "Entrar com Google",
                //           style: TextStyles.buttonGray,
                //         ),
                //       ),
                //     ],
                //   ),
                // ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
