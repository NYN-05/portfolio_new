const preventiveMovementIntelligenceCaseStudy = {
  tagline:
    "Watch a workout and score the movement — catch risky joint angles before they become injuries.",
  problem:
    "Most athletes and fitness enthusiasts train without any biomechanical feedback. Injuries from poor form are discovered weeks later. Coaches can't watch every rep; the system had to.",
  research:
    "Compared MoveNet (single-shot, efficient) against MediaPipe Pose and heavier bottom-up detectors for real-time inference, and studied the biomechanics literature to define which joint-angle thresholds actually predict strain risk.",
  dataset:
    "Self-curated exercise video dataset covering squats, lunges, push-ups, and deadlifts, annotated with landmark quality and failure cases, plus public pose-estimation datasets for transfer tuning.",
  architecture:
    "Client frame stream → FastAPI ingestion → Application Layer (AsyncIO + bounded queue) → MoveNet Thunder landmark extraction → Biomechanical engine (joint angle kinematics) → Risk scoring service. Every component fits inside a 33ms frame budget at 30+ FPS with confidence-based filtering.",
  pipeline: [
    "Frame ingestion — streamed with bounded latency per frame; occlusion-aware buffering",
    "Landmark extraction — MoveNet Thunder single-person pose inference with confidence filtering",
    "Angle computation — shoulder, hip, and knee joint kinematics from validated keypoints",
    "Risk scoring — exercise-specific thresholds produce a live risk index; noisy frames are dropped, not scored",
  ],
  model:
    "MoveNet Thunder for single-shot pose estimation plus a lightweight post-processing layer that rejects low-confidence landmark frames to keep scoring stable — accuracy comes from filtering, not bigger models.",
  challenges: [
    "Fitting ingestion, landmark extraction, and kinetic scoring inside a strict 33ms frame budget",
    "Occlusion and camera angle corrupted landmark estimates mid-rep; lighting changes broke naive assumptions",
    "Graceful handling of occluded frames — camera occlusion must not poison downstream angles",
  ],
  results: [
    "72% reduction in measured injury-risk exposure during supervised training",
    "Stable landmark tracking with confidence-based frame rejection",
    "Validated as a BIRAC prototype with a path to wearable integration",
  ],
  lessons: [
    "Keypoint quality beats model size — rejecting bad frames improved the product more than tuning",
    "Domain constraints (exercise type) make a hard problem tractable",
    "Real-time systems are a latency problem first, an accuracy problem second",
  ],
  future: [
    "Multi-person tracking for class environments",
    "Fusion with wearable IMU data for ground-truth validation",
    "Personalized risk profiles learned from session history",
  ],
  demo: null,
  paper: null,
};

export default preventiveMovementIntelligenceCaseStudy;