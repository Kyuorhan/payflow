import 'package:flutter/material.dart';
import 'package:payflow/app_routes.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      home: AppRoutes(),
    );
  }
}

// class AppFirebase extends StatefulWidget {
//   const AppFirebase({Key? key}) : super(key: key);

//   @override
//   _AppFirebaseState createState() => _AppFirebaseState();
// }

// class _AppFirebaseState extends State<AppFirebase> {
//   final Future<FirebaseApp> _initialization = Firebase.initializeApp();

//   @override
//   Widget build(BuildContext context) {
//     return FutureBuilder(
//         future: _initialization,
//         builder: (context, snapshot) {
//           if (snapshot.hasError) {
//             return const Material(
//               child: Center(
//                 child: Text(
//                   "Não foi possível inicializar o Firebase",
//                   textDirection: TextDirection.ltr,
//                 ),
//               ),
//             );
//           } else if (snapshot.connectionState == ConnectionState.done) {
//             return const AppRoutes();
//           } else {
//             return const Material(
//               child: Center(
//                 child: CircularProgressIndicator(),
//               ),
//             );
//           }
//         });
//   }
// }
